import json

with open('hitzones.tsv', 'r', encoding="utf8") as f:
  openFile = f.read()

openFile = openFile.split('\n')
openFile = [[value if len(value) >= 1 and value !=
             '–' else '-' for value in line.split(u'\u0009')] for line in openFile][1:]


lineObjects = []
keyValues = ['largeMonster', 'ke', 'bodyPart', 'state', 'slash', 'blunt', 'ranged', 'fire',
             'water', 'thunder', 'ice', 'dragon', 'stun', 'flinch', 'trip', 'timer', 'wound', 'sever', 'notes']
for line in openFile:
  obj = {}
  for (key, value) in zip(keyValues, line):
    if value.isdigit():
      if value == '❶':
        value = 1
      elif value == '❷':
        value = 2
      elif value == '❸':
        value = 3
      elif value == '❹':
        value = 4
      elif value == '❶❷❸':
        value = '1/2/3'
      else:
        value = int(value)

    obj[key] = value
  lineObjects.append(obj)

monsters = {}
monstersUnnamed = {}

for obj in lineObjects:
  monsterKey = obj['largeMonster'].lower().replace(' ', '')
  if monsterKey not in monsters:
    monsters[monsterKey] = {}
    monstersUnnamed[monsterKey] = {}

  monsters[monsterKey]['name'] = obj['largeMonster']
  monsters[monsterKey][(''.join([obj['bodyPart'], (' ' + obj['state'] if obj['state'] != '-' else '')])).lower()] = {
      'ke': obj['ke'],
      'slash': obj['slash'],
      'blunt': obj['blunt'],
      'ranged': obj['ranged'],
      'fire': obj['fire'],
      'water': obj['water'],
      'thunder': obj['thunder'],
      'ice': obj['ice'],
      'dragon': obj['dragon'],
      'stun': obj['stun'],
      'flinch': obj['flinch'],
      'trip': obj['trip'],
      'timer': obj['timer'],
      'wound': obj['wound'],
      'sever': obj['sever'],
      'notes': obj['notes']
  }

  monstersUnnamed[monsterKey][(''.join([obj['bodyPart'], (' ' + obj['state'] if obj['state'] != '-' else '')])).lower()] = {
      'ke': obj['ke'],
      'slash': obj['slash'],
      'blunt': obj['blunt'],
      'ranged': obj['ranged'],
      'fire': obj['fire'],
      'water': obj['water'],
      'thunder': obj['thunder'],
      'ice': obj['ice'],
      'dragon': obj['dragon'],
      'stun': obj['stun'],
      'flinch': obj['flinch'],
      'trip': obj['trip'],
      'timer': obj['timer'],
      'wound': obj['wound'],
      'sever': obj['sever'],
      'notes': obj['notes']
  }

print(monsters['behemoth']['forearms'])

with open('hitzones.json', 'w', encoding="utf8") as outfile:
    json.dump(monstersUnnamed, outfile, ensure_ascii=False, indent=4)
with open('hzv.json', 'w', encoding="utf8") as outfile:
    json.dump(monsters, outfile, ensure_ascii=False, indent=4)