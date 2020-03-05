const fs = require("fs");
const fetch = require("node-fetch");
const csv = require("./libraries/csvToJson");

const itemsURL = `https://mhw-db.com/items`;
const armorsURL = `https://mhw-db.com/armor/sets`;
const decorationsURL = `https://mhw-db.com/decorations`;
const skillsURL = `https://mhw-db.com/skills`;
const weaponsURL = `https://mhw-db.com/weapons`;
const armorPiecesURL = `https://mhw-db.com/armor`;

class DBBuilder {
	async getData(url) {
		const response = await fetch(url);
		return response.json();
	}

	async genJSON(
		data = { delim: `,`, input: "file.csv", output: "file.json" },
		advanced
	) {
		if (!advanced) {
			csv.fieldDelimiter(data.delim).getJsonFromCsv(data.input);
			csv.formatValueByType().getJsonFromCsv(data.input);
			csv.generateJsonFileFromCsv(data.input, data.output);
		} else {
			csv.fieldDelimiter(data.delim).getJsonFromCsv(data.input);
			csv.formatValueByType().getJsonFromCsv(data.input);
			csv.generateJsonFileFromCsv(data.input, data.output);
		}
	}

	async weapons(writeTo, advanced) {
		const weaponsAPIDatabase = await this.getData(weaponsURL);
		const db = {};

		for (let key of weaponsAPIDatabase) {
			let affinity = "-";
			if (key.attributes.affinity) {
				if (key.attributes.affinity == 0) affinity = "-";
				affinity = key.attributes.affinity;
			}

			let defense = "-";
			if (key.attributes.defense) {
				if (key.attributes.defense == 0) defense = "-";
				defense = key.attributes.defense;
			}

			let sharpness = "-";
			let handicraft1 = "-";
			let handicraft2 = "-";
			let handicraft3 = "-";
			let handicraft4 = "-";
			let handicraft5 = "-";
			if (key.durability) {
				if (key.durability[0]) {
					const s = [
						key.durability[0].red,
						key.durability[0].orange,
						key.durability[0].yellow,
						key.durability[0].green,
						key.durability[0].blue,
						key.durability[0].white,
						key.durability[0].purple
					];

					if (!advanced) {
						sharpness = `Red: ${s[0]}\nOrange: ${s[1]}\nYellow: ${s[2]}\nGreen: ${s[3]}\nBlue: ${s[4]}\nWhite: ${s[5]}\nPurple: ${s[6]}`;
					} else {
						sharpness = {
							red: s[0],
							orange: s[1],
							yellow: s[2],
							green: s[3],
							blue: s[4],
							white: s[5],
							purple: s[6]
						};
					}
				}

				if (key.durability[1]) {
					const s = [
						key.durability[1].red,
						key.durability[1].orange,
						key.durability[1].yellow,
						key.durability[1].green,
						key.durability[1].blue,
						key.durability[1].white,
						key.durability[1].purple
					];

					if (!advanced) {
						handicraft1 = `Red: ${s[0]}\nOrange: ${s[1]}\nYellow: ${s[2]}\nGreen: ${s[3]}\nBlue: ${s[4]}\nWhite: ${s[5]}\nPurple: ${s[6]}`;
					} else {
						handicraft1 = {
							red: s[0],
							orange: s[1],
							yellow: s[2],
							green: s[3],
							blue: s[4],
							white: s[5],
							purple: s[6]
						};
					}
				}

				if (key.durability[2]) {
					const s = [
						key.durability[2].red,
						key.durability[2].orange,
						key.durability[2].yellow,
						key.durability[2].green,
						key.durability[2].blue,
						key.durability[2].white,
						key.durability[2].purple
					];

					if (!advanced) {
						handicraft2 = `Red: ${s[0]}\nOrange: ${s[1]}\nYellow: ${s[2]}\nGreen: ${s[3]}\nBlue: ${s[4]}\nWhite: ${s[5]}\nPurple: ${s[6]}`;
					} else {
						handicraft2 = {
							red: s[0],
							orange: s[1],
							yellow: s[2],
							green: s[3],
							blue: s[4],
							white: s[5],
							purple: s[6]
						};
					}
				}

				if (key.durability[3]) {
					const s = [
						key.durability[3].red,
						key.durability[3].orange,
						key.durability[3].yellow,
						key.durability[3].green,
						key.durability[3].blue,
						key.durability[3].white,
						key.durability[3].purple
					];

					if (!advanced) {
						handicraft3 = `Red: ${s[0]}\nOrange: ${s[1]}\nYellow: ${s[2]}\nGreen: ${s[3]}\nBlue: ${s[4]}\nWhite: ${s[5]}\nPurple: ${s[6]}`;
					} else {
						handicraft3 = {
							red: s[0],
							orange: s[1],
							yellow: s[2],
							green: s[3],
							blue: s[4],
							white: s[5],
							purple: s[6]
						};
					}
				}

				if (key.durability[4]) {
					const s = [
						key.durability[4].red,
						key.durability[4].orange,
						key.durability[4].yellow,
						key.durability[4].green,
						key.durability[4].blue,
						key.durability[4].white,
						key.durability[4].purple
					];

					if (!advanced) {
						handicraft4 = `Red: ${s[0]}\nOrange: ${s[1]}\nYellow: ${s[2]}\nGreen: ${s[3]}\nBlue: ${s[4]}\nWhite: ${s[5]}\nPurple: ${s[6]}`;
					} else {
						handicraft4 = {
							red: s[0],
							orange: s[1],
							yellow: s[2],
							green: s[3],
							blue: s[4],
							white: s[5],
							purple: s[6]
						};
					}
				}

				if (key.durability[5]) {
					const s = [
						key.durability[5].red,
						key.durability[5].orange,
						key.durability[5].yellow,
						key.durability[5].green,
						key.durability[5].blue,
						key.durability[5].white,
						key.durability[5].purple
					];

					if (!advanced) {
						handicraft5 = `Red: ${s[0]}\nOrange: ${s[1]}\nYellow: ${s[2]}\nGreen: ${s[3]}\nBlue: ${s[4]}\nWhite: ${s[5]}\nPurple: ${s[6]}`;
					} else {
						handicraft5 = {
							red: s[0],
							orange: s[1],
							yellow: s[2],
							green: s[3],
							blue: s[4],
							white: s[5],
							purple: s[6]
						};
					}
				}
			}

			let elderseal = "-";
			if (key.elderseal) {
				if (key.elderseal == null) elderseal = "-";
				elderseal = key.elderseal;
			}

			let shelling = "-";
			if (key.shelling) {
				if (!advanced) {
					shelling = `${key.shelling.type} LV${key.shelling.level}`;
				} else {
					shelling = {
						type: key.shelling.type,
						level: key.shelling.level
					};
				}
			}

			let specialAmmo = "-";
			if (key.specialAmmo) {
				specialAmmo = key.specialAmmo;
			}

			let deviation = "-";
			if (key.deviation) {
				deviation = key.deviation;
			}

			let ammos = [];
			if (key.ammo) {
				for (const i in key.ammo) {
					let levelOne = 0;
					if (key.ammo[i].capacities[0]) {
						levelOne = key.ammo[i].capacities[0];
					}

					let levelTwo = 0;
					if (key.ammo[i].capacities[1]) {
						levelTwo = key.ammo[i].capacities[1];
					}

					let levelThree = 0;
					if (key.ammo[i].capacities[2]) {
						levelThree = key.ammo[i].capacities[2];
					}

					if (levelOne == 0 && levelTwo == 0 && levelThree) {
						ammos = [];
					}

					if (!advanced) {
						ammos.push(
							`${key.ammo[i].type}\nLV1: ${levelOne}\nLV2: ${levelTwo}\nLV3: ${levelThree}`
						);
					} else {
						let obj = {};
						obj = {
							type: key.ammo[i].type,
							lv1: levelOne,
							lv2: levelTwo,
							lv3: levelThree
						};

						ammos.push(obj);
					}
				}
			}

			let elements = [];
			if (key.elements) {
				for (const i in key.elements) {
					if (!advanced) {
						elements.push(
							`${key.elements[i].type}: ${key.elements[i].damage} damage`
						);
					} else {
						let obj = {};
						obj = {
							type: key.elements[i].type,
							damage: key.elements[i].damage
						};

						elements.push(obj);
					}
				}
			}

			let slots = [];
			if (key.slots) {
				for (const i in key.slots) {
					if (!advanced) {
						slots.push(`Rank: ${key.slots[i].rank}`);
					} else {
						let obj = {};
						obj = {
							rank: key.slots[i].rank
						};

						slots.push(obj);
					}
				}
			}

			let coatings = "-";
			if (key.coatings) {
				coatings = key.coatings;
			}

			let damageType = "-";
			if (key.damageType) {
				if (key.damageType == null) damage = "-";
				damageType = key.damageType;
			}

			let crafting = [];
			let upgrade = [];
			if (key.crafting) {
				if (key.crafting.craftingMaterials) {
					for (const i in key.crafting.craftingMaterials) {
						if (!advanced) {
							crafting.push(
								`${key.crafting.craftingMaterials[i].item.name}: ${key.crafting.craftingMaterials[i].item.description} (x${key.crafting.craftingMaterials[i].quantity})`
							);
						} else {
							let obj = {};
							obj = {
								name: key.crafting.craftingMaterials[i].item.name,
								description: key.crafting.craftingMaterials[i].item.description,
								quantity: key.crafting.craftingMaterials[i].quantity
							};

							crafting.push(obj);
						}
					}
				}

				if (key.crafting.upgradeMaterials) {
					for (const i in key.crafting.upgradeMaterials) {
						if (!advanced) {
							crafting.push(
								`${key.crafting.upgradeMaterials[i].item.name}: ${key.crafting.upgradeMaterials[i].item.description} (x${key.crafting.upgradeMaterials[i].quantity})`
							);
						} else {
							let obj = {};
							obj = {
								name: key.crafting.upgradeMaterials[i].item.name,
								description: key.crafting.upgradeMaterials[i].item.description,
								quantity: key.crafting.upgradeMaterials[i].quantity
							};

							upgrade.push(obj);
						}
					}
				}
			}

			if (!Array.isArray(ammos) || !ammos.length) {
				ammos = "-";
			}

			if (!Array.isArray(elements) || !elements.length) {
				elements = "-";
			}

			if (!Array.isArray(slots) || !slots.length) {
				slots = "-";
			}

			if (!Array.isArray(coatings) || !coatings.length) {
				coatings = "-";
			}

			if (!Array.isArray(crafting) || !crafting.length) {
				crafting = "-";
			}

			if (!Array.isArray(upgrade) || !upgrade.length) {
				upgrade = "-";
			}

			db[key.name.toLowerCase().replace(/ /g, "")] = {
				name: key.name,
				type: key.type,
				rarity: key.rarity,
				displayAttack: key.attack.display,
				rawAttack: key.attack.raw,
				damageType: damageType,
				affinity: affinity,
				defense: defense,
				sharpness: {
					base: sharpness,
					h1: handicraft1,
					h2: handicraft2,
					h3: handicraft3,
					h4: handicraft4,
					h5: handicraft5
				},
				elderseal: elderseal,
				shelling: shelling,
				specialAmmo: specialAmmo,
				deviation: deviation,
				ammos: ammos,
				elements: elements,
				slots: slots,
				coatings: coatings,
				crafting: crafting,
				upgrade: upgrade
			};
		}

		fs.writeFile(writeTo, JSON.stringify(db, null, 2), err => {
			if (err) {
				console.log(err);
			}
		});
	}

	async items(writeTo) {
		const itemsAPIDatabase = await this.getData(itemsURL);
		const db = {};

		for (let key of itemsAPIDatabase) {
			db[key.name.toLowerCase().replace(/ /g, "")] = {
				name: key.name,
				description: key.description,
				rarity: key.rarity,
				carryLimit: key.carryLimit,
				value: key.value
			};
		}

		const items = new Map();
		for (const i of Object.keys(db)) {
			items.set(i, db[i]);
		}

		fs.writeFile(writeTo, JSON.stringify(db, null, 2), err => {
			if (err) {
				console.log(err);
			}
		});
	}

	async decorations(writeTo, advanced) {
		const decorationsAPIDatabase = await this.getData(decorationsURL);
		const db = {};

		for (let key of decorationsAPIDatabase) {
			let skills = [];

			for (let i of key.skills) {
				if (!advanced) {
					skills.push(`${i.skillName}: ${i.description} LV${i.level}`);
				} else {
					let obj = {};
					obj = {
						name: i.skillName,
						description: i.description,
						level: i.level
					};

					skills.push(obj);
				}

				let nameString = key.name.toLowerCase().replace(/ /g, "");
				if (!advanced) {
					db[nameString] = {
						name: key.name,
						rarity: key.rarity,
						slot: key.slot,
						skills: skills
					};
				} else {
					db[nameString.split("/").join("+")] = {
						name: key.name,
						rarity: key.rarity,
						slot: key.slot,
						skills: skills
					};
				}
			}
		}

		fs.writeFile(writeTo, JSON.stringify(db, null, 2), err => {
			if (err) {
				console.log(err);
			}
		});
	}

	async skills(writeTo, advanced) {
		const skillAPIDatabase = await this.getData(skillsURL);
		const db = {};

		for (let key of skillAPIDatabase) {
			let ranks = [];

			for (let i of key.ranks) {
				if (!advanced) {
					ranks.push(`LV${i.level}: ${i.description}`);
				} else {
					let obj = {};
					obj = {
						level: i.level,
						description: i.description
					};

					ranks.push(obj);
				}

				db[key.name.toLowerCase().replace(/ /g, "")] = {
					name: key.name,
					description: key.description,
					ranks: ranks
				};
			}
		}

		fs.writeFile(writeTo, JSON.stringify(db, null, 2), err => {
			if (err) {
				console.log(err);
			}
		});
	}

	async charms(writeTo, advanced) {}

	async armors(writeTo, advanced) {
		const armorsAPIDatabase = await this.getData(armorsURL);
		const db = {};

		for (let key of armorsAPIDatabase) {
			let totalDefense = 0;
			let maxDefense = 0;
			let augDefense = 0;

			let fireResistance = 0;
			let waterResistance = 0;
			let thunderResistance = 0;
			let iceResistance = 0;
			let dragonResistance = 0;

			let armorSkills = [];
			let setBonus = [];

			let slots = [];
			let pieces = [];

			if (key.bonus) {
				if (key.bonus.name) {
					for (let i of key.bonus.ranks) {
						if (!advanced) {
							setBonus.push(
								`${key.bonus.name}: ${i.description} (${i.pieces} pieces)`
							);
						} else {
							let obj = {};
							obj = {
								name: key.bonus.name,
								description: i.description,
								pieces: i.pieces
							};

							setBonus.push(obj);
						}
					}
				}
			}

			if (key.pieces) {
				for (const i in key.pieces) {
					totalDefense += key.pieces[i].defense.base;
					maxDefense += key.pieces[i].defense.max;
					augDefense += key.pieces[i].defense.augmented;

					fireResistance += key.pieces[i].resistances.fire;
					waterResistance += key.pieces[i].resistances.water;
					thunderResistance += key.pieces[i].resistances.thunder;
					iceResistance += key.pieces[i].resistances.ice;
					dragonResistance += key.pieces[i].resistances.dragon;

					for (const v in key.pieces[i].skills) {
						if (!advanced) {
							armorSkills.push(key.pieces[i].skills[v].skillName);
						} else {
							let obj = {};
							obj = {
								piece: key.pieces[i].name,
								name: key.pieces[i].skills[v].skillName
							};

							armorSkills.push(obj);
						}
					}

					if (!advanced) {
						pieces.push(`${key.pieces[i].name} (${key.pieces[i].type})`);
					} else {
						let obj = {
							name: key.pieces[i].name,
							type: key.pieces[i].type
						};

						pieces.push(obj);
					}

					for (const v in key.pieces[i].slots) {
						if (
							key.pieces[i].slots.length &&
							Array.isArray(key.pieces[i].slots)
						) {
							if (!advanced) {
								if (key.pieces[i].type == "head") {
									slots.push(
										`<:cbHelmet:681250266380632153> Rank: ${key.pieces[i].slots[v].rank}`
									);
								}

								if (key.pieces[i].type == "chest") {
									slots.push(
										`<:cbChest:681250266460323852> Rank: ${key.pieces[i].slots[v].rank}`
									);
								}

								if (key.pieces[i].type == "gloves") {
									slots.push(
										`<:cbArm:681250265881509891> Rank: ${key.pieces[i].slots[v].rank}`
									);
								}

								if (key.pieces[i].type == "waist") {
									slots.push(
										`<:cbWaist:681250265995018248> Rank: ${key.pieces[i].slots[v].rank}`
									);
								}

								if (key.pieces[i].type == "legs") {
									slots.push(
										`<:cbLeg:681249420771328071> Rank: ${key.pieces[i].slots[v].rank}`
									);
								}
							} else {
								let obj = {};
								obj = {
									name: key.pieces[i].name,
									rank: key.pieces[i].slots[v].rank
								};

								slots.push(obj);
							}
						}
					}
				}
			}

			if (!Array.isArray(setBonus) || !setBonus.length) {
				setBonus = "-";
			}

			if (!Array.isArray(slots) || !slots.length) {
				slots = "-";
			}

			let defenses = `Base: ${totalDefense}\nMax: ${maxDefense}\nAugmented: ${augDefense}`;
			let resistances = `🔥 ${fireResistance}\n💧 ${waterResistance}\n⚡ ${thunderResistance}\n❄ ${iceResistance}\n🐉 ${dragonResistance}`;
			if (advanced) {
				db[key.name.toLowerCase().replace(/ /g, "")] = {
					name: key.name,
					rank: key.rank,
					setBonus: setBonus,
					defenses: {
						base: totalDefense,
						max: maxDefense,
						augmented: augDefense
					},
					resistances: {
						fire: fireResistance,
						water: waterResistance,
						thunder: thunderResistance,
						ice: iceResistance,
						dragon: dragonResistance
					},
					pieces: pieces,
					skills: armorSkills,
					slots: slots
				};
			} else {
				db[key.name.toLowerCase().replace(/ /g, "")] = {
					name: key.name,
					setBonus: setBonus,
					defenses: defenses,
          resistances: resistances,
          pieces: pieces,
					skills: armorSkills,
					slots: slots
				};
			}
		}

		fs.writeFile(writeTo, JSON.stringify(db, null, 2), err => {
			if (err) {
				console.log(err);
			}
		});
	}

	async armorPieces(writeTo, advanced) {
		const armorsAPIDatabase = await this.getData(armorPiecesURL);
		const db = {};

		for (let key of armorsAPIDatabase) {
			let skills = [];
			if (key.skills) {
				for (const i in key.skills) {
					if (!advanced) {
						skills.push(
							`${key.skills[i].skillName}: ${key.skills[i].description} LV${key.skills[i].description}`
						);
					} else {
						let obj = {};
						obj = {
							name: key.skills[i].skillName,
							level: key.skills[i].level,
							description: key.skills[i].description
						};

						skills.push(obj);
					}
				}
			}

			let slots = [];
			if (key.slots) {
				for (const i in key.slots) {
					if (!advanced) {
						slots.push(`Rank: ${key.slots[i].rank}`);
					} else {
						let obj = {};
						obj = {
							rank: key.slots[i].rank
						};

						slots.push(obj);
					}
				}
			}

			let crafting = [];
			if (key.crafting) {
				if (key.crafting.materials) {
					for (const i in key.crafting.materials) {
						if (!advanced) {
							crafting.push(
								`${key.crafting.materials[i].item.name}: ${key.crafting.materials[i].item.description} (x${key.crafting.materials[i].quantity})`
							);
						} else {
							let obj = {};
							obj = {
								name: key.crafting.materials[i].item.name,
								description: key.crafting.materials[i].item.description,
								quantity: key.crafting.materials[i].quantity
							};

							crafting.push(obj);
						}
					}
				}
			}

			if (!Array.isArray(skills) || !skills.length) {
				skills = "-";
			}

			if (!Array.isArray(slots) || !slots.length) {
				slots = "-";
			}

			if (!Array.isArray(crafting) || !crafting.length) {
				crafting = "-";
			}

			let base = 0;
			let max = 0;
			let augmented = 0;
			if (key.defense) {
				if (key.defense.base) {
					base = key.defense.base;
				}

				if (key.defense.max) {
					max = key.defense.max;
				}

				if (key.defense.augmented) {
					augmented = key.defense.augmented;
				}
			}

			let fire = 0;
			let water = 0;
			let ice = 0;
			let thunder = 0;
			let dragon = 0;

			if (key.resistances) {
				if (key.resistances.fire) {
					fire = key.resistances.fire;
				}

				if (key.resistances.water) {
					water = key.resistances.water;
				}

				if (key.resistances.ice) {
					ice = key.resistances.ice;
				}

				if (key.resistances.thunder) {
					thunder = key.resistances.thunder;
				}

				if (key.resistances.dragon) {
					dragon = key.resistances.dragon;
				}
			}

      let defenses = `Base: ${base}\nMax: ${max}\nAugmented: ${augmented}`;
			let resistances = `🔥 ${fire}\n💧 ${water}\n⚡ ${thunder}\n❄ ${ice}\n🐉 ${dragon}`;
			if (advanced) {
				db[key.name.toLowerCase().replace(/ /g, "")] = {
					name: key.name,
					rank: key.rank,
					rarity: key.rarity,
					type: key.type,
					defenses: {
						base: base,
						max: max,
						augmented: augmented
					},
					resistances: {
						fire: fire,
						water: water,
						ice: ice,
						thunder: thunder,
						dragon: dragon
					},
					slots: slots,
					skills: skills,
					crafting: crafting
				};
			} else {
				db[key.name.toLowerCase().replace(/ /g, "")] = {
          name: key.name,
          rank: key.rank,
					rarity: key.rarity,
					type: key.type,
					defenses: defenses,
					resistances: resistances,
					slots: slots,
					skills: skills,
					crafting: crafting
				};
			}
		}

		fs.writeFile(writeTo, JSON.stringify(db, null, 2), err => {
			if (err) {
				console.log(err);
			}
		});
	}
}

module.exports = new DBBuilder();
