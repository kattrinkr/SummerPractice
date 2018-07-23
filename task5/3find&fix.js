db.getAllDocs().then(function (result) {
  return Promise.all(result.rows.map(function (row) {
    return db.remove(row.doc);
  }));
}).then(function (results) {
  // All docs removed!
});