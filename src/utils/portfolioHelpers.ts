import type {
  CosmicExperiment,
  NavItem,
  TechCategory,
  TechSkillItem,
} from '../data/portfolioData';

/**
 * Formats a Date into HH:mm · WIB using Asia/Jakarta (UTC+7).
 */
export function formatJakartaTime(date: Date, includeSeconds = false): string {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  if (includeSeconds) {
    options.second = '2-digit';
  }

  const formatted = new Intl.DateTimeFormat('en-GB', options).format(date);
  return `${formatted} · WIB`;
}

/**
 * Resolves the active navigation section id based on scroll positions.
 */
export function resolveActiveSection(
  sections: Array<{ id: string; top: number }>,
  scrollOffset = 140
): string {
  if (sections.length === 0) {
    return 'home';
  }

  let activeId = sections[0].id;
  for (const section of sections) {
    if (section.top <= scrollOffset) {
      activeId = section.id;
    }
  }
  return activeId;
}

/**
 * Validates that a nav item matches a known section id and returns the target selector.
 */
export function getNavTargetId(items: NavItem[], itemId: string): string | null {
  const found = items.find((item) => item.id === itemId);
  return found ? found.id : null;
}

/**
 * Cycles to the next experiment or selects a specific experiment by id.
 */
export function selectExperiment(
  experiments: CosmicExperiment[],
  targetId: string
): CosmicExperiment {
  const found = experiments.find((exp) => exp.id === targetId);
  return found ?? experiments[0];
}

/**
 * Filters CV tech stack items by category ('all', 'language', 'framework', 'tooling').
 */
export function filterTechStack(
  items: TechSkillItem[],
  category: TechCategory
): TechSkillItem[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

/**
 * Resolves the selected tech stack item or falls back to the first visible item.
 */
export function selectTechSkillItem(
  items: TechSkillItem[],
  targetId: string
): TechSkillItem {
  const found = items.find((item) => item.id === targetId);
  return found ?? items[0];
}
