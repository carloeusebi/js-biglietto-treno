# Project author: Carlo Eusebi

## Trace

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

## Steps

1. Assign constants:
    - €/km;
    - Minor age;
    - Senior age;
    - Discount for minors;
    - Discount for seniors;
1. Ask user for km;
1. Ask user for passenger's age;
1. (Validate user's inputs);
1. Calculate price for input km;
1. **IF** age is under minor apply discount for minors;
    - **ELSE IF** age is over senior apply discount for seniors;
1. Round price;
1. Print price;
 