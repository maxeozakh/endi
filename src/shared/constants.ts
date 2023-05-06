const NEGATIVE_TAGS = [
  { id: '1', isActive: true, name: 'bad sleep' },
  { id: '2', isActive: true, name: 'junk food' },
  { id: '3', isActive: true, name: 'stress' },
  { id: '4', isActive: true, name: 'a lot communication' },
  { id: '5', isActive: true, name: 'conflict' },
  { id: '6', isActive: true, name: 'illness' },
  { id: '7', isActive: true, name: 'skip routines' },
  { id: '8', isActive: true, name: 'was distracted' },
  { id: '9', isActive: true, name: 'do nothing' },
  { id: '10', isActive: true, name: 'alcohol consumption' },
  { id: '11', isActive: true, name: 'poor time management' },
  { id: '12', isActive: true, name: 'excessive screen time' },
]

const POSITIVE_TAGS = [
  { id: '13', isActive: true, name: 'good sleep' },
  { id: '14', isActive: true, name: 'early wakeup' },
  { id: '15', isActive: true, name: 'nap' },
  { id: '16', isActive: true, name: 'walk outside' },
  { id: '17', isActive: true, name: 'meditation' },
  { id: '18', isActive: true, name: 'yoga' },
  { id: '19', isActive: true, name: 'exercise' },
  { id: '20', isActive: true, name: 'healthy food' },
  { id: '21', isActive: true, name: 'coffee' },
  { id: '22', isActive: true, name: 'good work session' },
  { id: '23', isActive: true, name: 'sex' },
  { id: '24', isActive: true, name: 'cold shower' },
  { id: '25', isActive: true, name: 'relax' },
  { id: '26', isActive: true, name: 'English class' },
  { id: '27', isActive: true, name: 'activity outside' },
  { id: '28', isActive: true, name: 'off screen before sleep' },
  { id: '29', isActive: true, name: 'art or creative expression' },
  { id: '30', isActive: true, name: 'reading' },
  { id: '31', isActive: true, name: 'journaling' },
  { id: '32', isActive: true, name: 'connecting with friends' },
]

export const DEFAULT_TAGS = [...NEGATIVE_TAGS, ...POSITIVE_TAGS]

export const DEFAULT_METRICS = [
  { name: 'energy', color: '#F5DB5E', id: '1', isActive: true },
  { name: 'focus', color: '#E7BDCA', id: '2', isActive: true },
  { name: 'fun', color: '#5A86E9', id: '3', isActive: true },
]

export const ESTIMATE_MAP = {
  0: { label: 'unknown', emoji: '🫥' },
  1: { label: 'horrible', emoji: '🥵' },
  2: { label: 'bad', emoji: '😢' },
  3: { label: 'meh', emoji: '😐' },
  4: { label: 'good', emoji: '😊' },
  5: { label: 'great', emoji: '🤩' },
}

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
