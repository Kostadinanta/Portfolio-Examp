import test from 'node:test';
import assert from 'node:assert/strict';
import { COSMIC_EXPERIMENTS, CV_TECH_STACK, NAV_ITEMS } from '../data/portfolioData';
import {
  filterTechStack,
  formatJakartaTime,
  getNavTargetId,
  resolveActiveSection,
  selectExperiment,
  selectTechSkillItem,
} from './portfolioHelpers';

test('formatJakartaTime formats UTC timestamp into UTC+7 WIB time', () => {
  const sampleUtc = new Date('2026-11-20T07:28:09.000Z');
  assert.equal(formatJakartaTime(sampleUtc), '14:28 · WIB');
  assert.equal(formatJakartaTime(sampleUtc, true), '14:28:09 · WIB');
});

test('resolveActiveSection picks the deepest section above scroll threshold', () => {
  const sections = [
    { id: 'home', top: -600 },
    { id: 'about', top: -100 },
    { id: 'experience', top: 120 },
    { id: 'skills', top: 820 },
  ];
  assert.equal(resolveActiveSection(sections, 140), 'experience');
});

test('resolveActiveSection falls back to first section when above all thresholds', () => {
  const sections = [
    { id: 'home', top: 200 },
    { id: 'about', top: 900 },
  ];
  assert.equal(resolveActiveSection(sections, 140), 'home');
});

test('getNavTargetId validates known navigation items', () => {
  assert.equal(getNavTargetId(NAV_ITEMS, 'projects'), 'projects');
  assert.equal(getNavTargetId(NAV_ITEMS, 'nonexistent'), null);
});

test('selectExperiment returns matched experiment or falls back to first', () => {
  const robotics = selectExperiment(COSMIC_EXPERIMENTS, 'robotics');
  assert.equal(robotics.code, 'EXP.02');
  assert.equal(robotics.orbitLabel, 'IRC.NODE');

  const fallback = selectExperiment(COSMIC_EXPERIMENTS, 'unknown');
  assert.equal(fallback.id, COSMIC_EXPERIMENTS[0].id);
});

test('filterTechStack filters CV skills accurately by category', () => {
  assert.equal(filterTechStack(CV_TECH_STACK, 'all').length, CV_TECH_STACK.length);
  const languages = filterTechStack(CV_TECH_STACK, 'language');
  assert.ok(languages.some((item) => item.id === 'php'));
  assert.ok(languages.some((item) => item.id === 'python'));
  assert.ok(!languages.some((item) => item.id === 'laragon'));
});

test('selectTechSkillItem returns matched item or falls back to first item', () => {
  const laragon = selectTechSkillItem(CV_TECH_STACK, 'laragon');
  assert.equal(laragon.name, 'Laragon');
  const fallback = selectTechSkillItem(CV_TECH_STACK, 'missing');
  assert.equal(fallback.id, CV_TECH_STACK[0].id);
});
