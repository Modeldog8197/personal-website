import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { makeSamples, summarizeSamples } from '../sampling.js'
import {
  matchesProject,
  projects,
  moreProjects,
  categories,
} from '../portfolio.js'

test('normal sampling is reproducible, finite, and approximately standardized', () => {
  const samples = makeSamples(10000, 42)
  assert.deepEqual(samples, makeSamples(10000, 42))
  assert.notDeepEqual(samples, makeSamples(10000, 43))
  assert.ok(samples.every(Number.isFinite))
  const { bins, outside, mean } = summarizeSamples(samples)
  assert.equal(bins.reduce((a, b) => a + b, 0) + outside, samples.length)
  assert.ok(Math.abs(mean) < 0.05)
  const variance =
    samples.reduce((sum, n) => sum + (n - mean) ** 2, 0) / samples.length
  assert.ok(Math.abs(variance - 1) < 0.05)
})

test('out-of-range samples are counted separately from visible histogram bins', () => {
  const { bins, outside, mean } = summarizeSamples([-5, -4, 0, 3.99, 4, 8])
  assert.equal(outside, 3)
  assert.equal(
    bins.reduce((a, b) => a + b, 0),
    3,
  )
  assert.ok(Number.isFinite(mean))
})

test('search combines category and case-insensitive words across title and stack', () => {
  assert.ok(
    matchesProject(projects[1], 'Machine learning', 'BASKETBALL python'),
  )
  assert.ok(!matchesProject(projects[1], 'Simulation', 'python'))
  assert.ok(!matchesProject(projects[1], 'All', 'unmatched term'))
  assert.ok(matchesProject(projects[0], 'All', '   '))
})

test('portfolio categories and links are valid and repository coverage is unique', () => {
  for (const project of [...projects, ...moreProjects]) {
    assert.ok(categories.includes(project.category))
    for (const field of ['source', 'live']) {
      if (project[field])
        assert.equal(new URL(project[field]).protocol, 'https:')
    }
  }
  const repos = JSON.parse(
    readFileSync(new URL('../repositories.json', import.meta.url)),
  )
  assert.equal(repos.length, 39)
  assert.equal(new Set(repos.map((r) => r.url)).size, repos.length)
  for (const repo of repos)
    assert.equal(repo.url, `https://github.com/Modeldog8197/${repo.name}`)
})
