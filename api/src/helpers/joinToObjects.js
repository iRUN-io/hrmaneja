
const joinToObjects = (object, key, val) => {
    return { ...object, [key]: val };
  };

module.exports = {
    joinToObjects,
};
