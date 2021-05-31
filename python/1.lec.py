n, k = map(int, input().split())  # 맵 함수에 넣어서 정수형으로 변경

result = 0

while True:
    target = (n // k) * k
    result += (n - target)
    n = target

    if n < k:
        break

    result += 1
    n // k = k
    result += (n-1)
    print(result)

#곱하기 혹은 더하기

data = input()

result = int(data[0])

for i in range(1, len(data)):
    num = int(data[i])
    if num <= 1 or result <= 1:
        result += num
    else:
        result *= num
print(result)

#모험가 길드

n = int(input())
data = list(map(int, input().split()))
data.sort()

result = 0
count = 0

for i in data:
    count += 1
    if count > i:
        result += 1
        count = 0

print(result)
