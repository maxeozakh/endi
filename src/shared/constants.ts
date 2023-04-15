const NEGATIVE_TAG_NAMES = [
  'bad sleep',
  'junk food',
  'stress',
  'a lot communication',
  'conflict',
  'illness',
  'skip routines',
  'was distracted',
  'do nothing',
  'alcohol consumption',
  'poor time management',
  'excessive screen time',
]

const POSITIVE_TAG_NAMES = [
  'good sleep',
  'early wakeup',
  'nap',
  'walk outside',
  'meditation',
  'yoga',
  'exercise',
  'healthy food',
  'coffee',
  'good work session',
  'sex',
  'cold shower',
  'relax',
  'English class',
  'activity outside',
  'off screen before sleep',
  'art or creative expression',
  'reading',
  'journaling',
  'connecting with friends',
]

export const DEFAULT_TAGS = [...NEGATIVE_TAG_NAMES, ...POSITIVE_TAG_NAMES]

export const DEFAULT_METRICS = [
  { name: 'energy', color: '#F5DB5E', id: '1' },
  { name: 'focus', color: '#E7BDCA', id: '2' },
  { name: 'fun', color: '#5A86E9', id: '3' },
]
