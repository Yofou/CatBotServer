const csv = require('./csvToJson');
const fs = require('fs');

class MapUtils {
  constructor() {
    this.logs = {
      success: 'File saved: '
    };
  }

  buildMap(
    file,
    opts = { extended: false, extraProp: false, raw: false },
    prop = '',
    extraProp = ''
  ) {
    let json = `NULL`;
    if (opts.raw != true) {
      json = JSON.parse(fs.readFileSync(file, 'utf8'));
    } else {
      json = JSON.parse(file);
    }
    let map = new Map();

    if (!opts.extended) {
      for (const i of Object.keys(json)) {
        map.set(i, json[i]);
      }
    }

    if (opts.extended && !opts.extraProp) {
      for (const i of Object.keys(json)) {
        map.set(json[i][prop], json[i]);
      }
    }

    if (opts.extended && opts.extraProp) {
      for (const i of Object.keys(json)) {
        map.set(json[i][prop], json[i][extraProp]);
      }
    }

    return {
      map: map,
      raw: json
    };
  }

  buildArray(map, prop) {
    let array = [];

    for (let [k, v] of map) {
      const item = map.get(k);
      array.push(item[prop]);
    }

    return array;
  }

  latestQuery(array) {
    return array.slice(-1).pop();
  }

  removeFromArray(array, item) {
    return array.filter(e => e !== item);
  }

  readFile(db) {
    return JSON.parse(fs.readFileSync(db, 'utf8'));
  }

  writeFile(writeTo, db) {
    fs.writeFile(writeTo, JSON.stringify(db, null, 2), err => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${this.logs.success}${writeTo}`);
      }
    });
  }

  search(array, prop, value) {
    let filtered = array.filter(function (item) {
      return item[prop] == value;
    });

    return filtered;
  }

  advancedSearch(array, prop, newProp, value, newValue) {
    let filtered = array.filter(function (item) {
      return item[prop] == value && item[newProp] == newValue;
    });

    return filtered;
  }

  bulkConvertCSVs(bulkData = [{ input: '', output: '', delim: ',' }]) {
    for (const i in bulkData) {
      fs.readdir(bulkData[i].input, (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
          const name = file.split('.')[0];
          if (!file.endsWith('.csv')) return;

          this.writeCSV({
            delim: bulkData[i].delim,
            input: `${bulkData[i].input}/${file}`,
            output: `${bulkData[i].output}/${name}.json`
          });
        });
      });
    }
  }

  writeCSV(data = { delim: `,`, input: 'file.csv', output: 'file.json' }) {
    csv.fieldDelimiter(data.delim).getJsonFromCsv(data.input);
    csv.formatValueByType().getJsonFromCsv(data.input);
    csv.generateJsonFileFromCsv(data.input, data.output);
  }
}

module.exports = new MapUtils();
