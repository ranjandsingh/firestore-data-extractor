 function getSingleData(doc) {
  const data =  doc.data();
  return { id: doc.id, ...data };
}

function getMultipleData(collection) {
  const data = [];
  collection.forEach((doc) => {
    data.push(getSingleData(doc));
  });
  return data;
}

module.exports = {
  getSingleData,
  getMultipleData,
};