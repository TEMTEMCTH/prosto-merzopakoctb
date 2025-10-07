book = {
    "title":"1984",
    "author":"Джордж Оруэлл",
    "year": 1950,
    "ganre":"Антиутопия"
}

player = {
    "name" : "Oleg" ,
    "id" : 1,
    "age" : 52,
    "city" : 17,
    "isAlive" : True,
    "damage" : 20.3
}

simple = {
    1:"One",
    2:"Two"
    
}

print(player["name"])

print(player.get("city")) # 17
print(player.get("class")) # none (Без ошибки)
print(player.get("city","Не найден"))

#Перезапись элемент в ключе Damage
player["damage"] = 22.5
#Создаться новая пара ключ значение 
player["class"] = "Шляпа усатая"

# Если внутри словаря player есть ключ name ,то выполнить :
if "name" in player:
    print("Ключ name существует")
if "HP" not in player:
    print("Ключ HP не найден!")
# Удаление по ключу с возвратом значения 
removed_value = player.pop ("city")

last_item = player.popitem()
print("Удалили последнюю пару:",last_item)

print(player.get()) #dict_keys([name,damage,age.isAlive])
print(player.values())
print(player.items())

# Перебор словарей в циклах 
# Перебор ключей в словаре 
for key in player.keys():
    print(key)
for value in player.values():
    print(value)
    for key , value in player.items():
        print(f"Ключ{key},Значение:{value}")
        
        
students = [
    {"name": "Никитос", "age": 0 , "grades":[5,4,3,2,1,4]},
    {"name": "Ванек", "age": 0 , "grades":[5,5,5,5,5,1]},
    {"name": "Санек", "age": 0 , "grades":[3,3,2,4,5,4]}
]

# Получание возраста первого студента 
print(students[0]["age"]) # 0
print(students[1]["name"])


for student in students:
    print(student["name"])
    
    
    
    length1 = 5 
width1 = 3 
area1 = length1 * width1
print (f"Площадь комнаты 2 {area1}")

length2 = 7
width2 = 4
area2 = length2 * width2 
print(f"Площадь комнаты 2 {area2}")

def great ():
    """Эта фунция пишет привет """
    print("Привет ,{name}, это моя первая функция ")
    
    great("Oleg")
    great("Sasha")
    great("Nikitos")

def introduce (name, age , city):
    """ Рассказ о человеке """
    print(f"Меня зовут {name}, {age} лет, я живу в {city}")
    
    introduce("Oleg" , 42, "17")
    
    def calculate_area(length,width):
        area = length * width
        return area
    
room_area = calculate_area(5,3)
print(f"Площадь комнаты {room_area}")

def isAdult(age):
    if age>=18:
        return True
    else:
        return False
    
if isAdult(20):
    print("Доступ разрешен")
else:
    print("Катись от сюда малой")
    
    
  


    
