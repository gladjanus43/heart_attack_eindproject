# Inleverdocument

## Concept (1 punt)
Ik had het idee om een rekenmachine te maken die kan bepalen hoe vatbaar je bent voor een hart aanval. Door op internet te zoeken kwam ik al snel een mooie dataset tegen welke alle informatie beschikbaar had die ik nodig heb. 

Om te kijken naar mogelijke oplossingen ben ik als eerste met de decission tree begonnen. Ik had hierbij het idee dat het een goede tool kon zijn om door de stappen heen te lopen. De dataset gaf een 1 of een 0 terug dus dit moest te doen zijn. Verder wilde ik kijken naar KNN en Neural networks. De KNN leek me goed omdat het mensen clusterd die wel of neit vatbaar zijn. Neural Networks kunnen naar mijn idee bijna alles voorspellen als de data goed is. 

Ik heb er voor gekozen om naar ml5 te kijken omdat we hier al veel mee hebben gedaan. Ook is de documentatie goed dus dat komt goed van pas tijdens het maken van het project. ML5 heeft neural networks inzich, en daarnaast ook een KNN algoritme. 

## Prototype 1  (1 punt)
het eerste prototype dat ik heb gemaakt was op basis van het KNN algoritme van ml5. Ik had het model snel getraind maar ik kwam er achter dat de knn functie in ml5 geen export heeft voor een model, geen load functie en geen predict functie. Deze was dus onmogelijk om toe te passen in het project. 

## Prototype 2  (1 punt)
het tweede prototype is gemaakt met een neural network. Deze heeft dus wel de save, load en predict functie. Het inladen van de data ging goed en ik kon voorspellingen maken. Dit is dus de manier waarop ik de uitwerking ga voortzetten. 

## Uitwerking  (1 punt)
Ik heb er dus voor gekozen om een neural network te gebruiken omdat deze de functionaliteiten bezit die ik nodig had. Om het model beter te kunnen gebruiken heb ik er ook een accuracy test in verwerkt. Hiermee kan ik door middel van de data testen of de voorspellingen daadwerkelijk goed zijn. Nadat het model klaar was kon ik gemakkelijk het model downloaden door middel van een save functie. 

## Web applicatie (1 punt)
Als laatste heb ik dus het gedownloade model kunnen inladen in een applicatie. Door middel van de load functie is het model in een keer beschikbaar. Wanneer het model geladen is wordt de pagina pas beschikbaar voor de gebruiker. Verder heb ik geprobeerd alle input velden uit te typen zodat de gebruiker gemakkelijk kan aanklikken wat hij zoekt. Wanneer de gebruiker op calculate drukt wordt het percentage weergegeven aan de bovenkant van de pagina. 

## Organisatie van code (1 punt)
Ik gebruik altijd veel functies wanneer ik werk met javascript. Het maakt het naar mijn idee allemaal een stuk overzichtelijker. Verder gebruik ik duidelijke benamingen en wil ik altijd een logisch bestand opleveren. 

### Veel succes! 