# 175. 组合两个表
select p.firstName, p.lastName, a.city, a.state 
from Person as p 
left join Address as a 
on p.PersonId=a.PersonId