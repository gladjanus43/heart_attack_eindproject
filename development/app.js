const options  = { task: 'regression', debug: true }
const nn = ml5.neuralNetwork(options) 

let correct = 0;
let wrong = 0;

function loadData(){
    Papa.parse("../heart.csv", {
        download:true,
        header:true, 
        dynamicTyping:true,
        complete: results => dataParsed(results.data)
    })
  }

 function dataParsed(data){

    let trainData = data.slice(0,Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)

    trainData.forEach(element => {
        addDataToNN(element)
    });

    nn.normalizeData()

    const trainingOptions = {
        epochs: 32 ,
        batchSize: 12
    }

    nn.train(trainingOptions, trainingFinished);
 }

 function trainingFinished(){
     nn.save()
 }

 function calculateAccuracy(data){
    data.forEach( element => {
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

        nn.predict(inputs, (error, result) => {
            if (element.output == 1){
                if(result[0].value >= 0.5 ){
                    correct++
                }else{
                    wrong++
                }
            }else{ //0
                if(result[0].value >= 0.5 ){
                    wrong++
                }else{
                    correct++
                }
            }
        })
    })
 }

 function addDataToNN(element){
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
   const output = { output : element.output}
   nn.addData(inputs, output)
 }

 loadData()



    