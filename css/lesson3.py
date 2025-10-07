empty_list = []

fruits = ["apple","banana","dikiy kukuruz"]

mixed_list = [1,"hello",3.14,True]

number = list([1,2,3,4,5])

print (fruits[2])

print(fruits[-1])

# Добавление 

print(fruits)

fruits.append("mambastic")

print(fruits)

fruits.insert(1,"kiwi")

print (fruits)

fruits.remove("kiwi")

print(fruits)

pop_res = fruits.pop(-1)

print("Удален:", pop_res)

print(fruits)

numbers =[0,1,2,3,4,5,6,7,8,9]

# от 2 до 4 
print(numbers[2:5])
# от 5 до конца
print(numbers[:5])
#
print(numbers[::2])
# вывод списка в обратном порядке 
print(number[::-1])



for fruit in fruits:

    print("Я люблю ", fruit )

list_lengh = len(fruits)
print(list_lengh)

for i in range(len(fruits)):

    print("Элемент под индексом",i,"Это",fruits[i])
prices = [100,250,300,50]
total = 0
for price in prices:
        total= total + price 
print("сумма всех цен кириешек:", total)



        



