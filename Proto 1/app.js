let json_data
let kmeans

function loadData(){
  Papa.parse("../heart.csv", {
      download:true,
      header:true, 
      dynamicTyping:true,
      complete: results => refineData(results.data)
  })
}

function refineData(data) {
  const options = {
    k: 3,
    maxIter: 4,
    threshold: 0.5,
  }

  kmeans = ml5.kmeans(data, options, clusterCalculated)
}

function clusterCalculated(){
  console.log('done');
  console.log(kmeans.dataset);
}

loadData()




