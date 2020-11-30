# SmartBot
SmartBot est un robot relativement peu cher et qui pourrait réaliser des actions sur la base d’un mécanisme de transfert de donnée simple avec une incrémentation de code facile d’accès et sans nécessité de ressource extérieure autre qu’un smartphone. 

[![Robot structure](Media/image/Red_object.gif)]

L’objectif de ce projet est celui de réduire les barrières à l’entrée, aussi bien au niveau hardware que software, pour l’initiation à la robotique dans un contexte scolaire. En effet, la plupart des robots capable de mouvements simple et adaptés aux enfants sont chers et nécessitent l'installation de logiciels ainsi qu’un certain degré de connaissances en programmation afin de faire réaliser aux robots des actions. 
De fait, un professeur souhaitant enseigner la robotique est limité par une sorte de barrière à l’entrée imposée par la quantité de temps de travail à réaliser en amont d’un cours pour se familiariser avec les logiciels, le coût du robot sans oublier une certaine difficulté d’accès aux ressources de code.

## Principe de fonctionnement
L’idée derrière ce mécanisme de transfert est celle de faire fonctionner un robot en utilisant un smartphone qui affiche une page web produisant de la lumière interagissant  ainsi avec des photo récepteurs. Cette interaction permet un traitement des couleurs (via la caméra) facilités, une réponse quasi immédiate des capteurs  ainsi qu’un accès au code simple via l’interface de la page web.Notons aussi que la puissance de calcul d’un smartphone permet de réaliser rapidement divers calculs nécessaire au fonctionnement de la page web.
Ainsi, le robot ne nécessite aucune configuration supplémentaire puisque tout sera directement fourni avec l’interface de la page web sur le smartphone qui contrôlera par ailleurs le mouvement de celui-ci. 

## Documentation

- [doc](doc) folder contains all main information about the project and its state of progress.
- [Arduino code](Arduino_code) folder holds the arduino code needed for the motor to run and for the photosensors to detect light changings.
- [web page](Web_page) folder holds all html/css/javascript codes needed to make the robot do differents actions like following an object.
- [media](Media) folder contains pictures and videos about test we mades and robot structure
- [Miscellaneous](Miscellaneous) folder contains various information about further 
