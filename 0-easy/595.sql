/*
    Problem: 595. Big Countries
    Difficulty: Easy
    URL: https://leetcode.com/problems/big-countries/description/
    -------------
    | Rationale |
    -------------
    We select the three columns which we are running the query on and want to know the info for.
    Then we select the table that we are querying and define the conditionals. 
*/

SELECT name,population,area FROM World WHERE area > 3000000 OR population > 25000000