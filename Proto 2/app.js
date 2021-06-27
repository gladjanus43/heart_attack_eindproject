const options = {
    task: 'regression',
    debug: true
  }

const nn = ml5.neuralNetwork(options);

function loadData(){
    Papa.parse("../heart.csv", {
        download:true,
        header:true, 
        dynamicTyping:true,
        complete: results => dataParsed(results.data)
    })
  }

  // Step 2: initialize your neural network
 function dataParsed(data){
    data.forEach(element => {
        
    
        const inputs = {
             age : element.age,
             sex: element.sex ,
             cp: element.cp ,
             trtbps : element.trtbps ,
             chol: element.chol ,
             fbs: element.fbs ,
             restecg : element.restecg ,
             thalachh : element.thalachh ,
             exng : element.exng ,
             ldpeak : element.oldpeak ,
             slp : element.slp ,
             caa: element.caa ,
             thall : element.thall 
        }

        // const inputs = { 
        //     horsepower : element.horsepower,
        //     cylinders : element.cylinders
        // }
        const output = { output : element.output}

        nn.addData(inputs, output)
    });

    nn.normalizeData()

    const trainingOptions = {
        epochs: 32 ,
        batchSize: 12
    }

    nn.train(trainingOptions, finishedTraining);
 }

 function finishedTraining(){
    classify()
 }

 loadData()