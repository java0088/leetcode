function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function bubbleSort(arr) {
  if (arr.length < 2) return

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}

function selectSort(arr) {
  if (arr.length < 2) return

  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }

    swap(arr, min, i)
  }
}

function insertSort(arr) {
  if (arr.length < 2) return

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1)
    }
  }
}

function mergeSort(arr) {
  if (arr.length < 2) return
  sort(arr, 0, arr.length - 1)

  function sort(arr, L, R) {
    if (L >= R) return
    const mid = L + Math.floor((R - L) / 2)

    sort(arr, L, mid)
    sort(arr, mid + 1, R)

    merge(arr, L, mid, R)
  }

  function merge(arr, L, mid, R) {
    if (L >= R) return
    let p1 = L
    let p2 = mid + 1
    let i = L
    let help = []

    while (p1 <= mid && p2 <= R) {
      if (arr[p1] < arr[p2]) {
        help[i++] = arr[p1++]
      } else {
        help[i++] = arr[p2++]
      }
    }

    while (p1 <= mid) {
      help[i++] = arr[p1++]
    }

    while (p2 <= R) {
      help[i++] = arr[p2++]
    }

    for (let i = L; i <= R; i++) {
      arr[i] = help[i]
    }
  }
}

function quickSort(arr) {
  if (arr.length < 2) return
  sort(arr, 0, arr.length - 1)
  function sort(arr, L, R) {
    if (L >= R) return
    const P = partition(arr, L, R)
    sort(arr, L, P - 1)
    sort(arr, P + 1, R)
  }

  function partition(arr, L, R) {
    if (L >= R) return L
    let l = L
    let r = R
    while (l < r) {
      if (arr[l] <= arr[R]) {
        l++
      } else {
        swap(arr, l, --r)
      }
    }
    swap(arr, l, R)
    return l
  }
}

function heapSort(arr) {
  if (arr.length < 2) return

  for (let i = arr.length; i >= 0; i--) {
    float(arr, i)
  }
  // [66, 11, 22, 33, 88, 44, 55, 99, 77]
  let heapSize = arr.length
  swap(arr, 0, --heapSize)

  // [33, 88, 77, 66, 44, 11, 55, 22, 99]
  for (let i = 0; i < heapSize; i++) {
    sunk(arr, i, heapSize)
    swap(arr, 0, --heapSize)
  }
  function float(arr, i) {
    let f = Math.floor(i / 2) - 1

    while (i >= 0) {
      if (arr[i] > arr[f]) {
        swap(arr, i, f)
      }

      i = f
      f = Math.floor(i / 2) - 1
    }
  }

  function sunk(arr, i, heapSize) {
    let left = Math.floor(i * 2) + 1

    while (left < heapSize) {
      let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
      largest = arr[largest] > arr[i] ? largest : i
      if (i === largest) break
      swap(arr, i, largest)

      i = left
      left = Math.floor(i * 2) + 1
    }
  }
}

let arr = [66, 11, 22, 33, 88, 44, 55, 99, 77]
console.log('排序前', arr)
quickSort(arr)
console.log('排序后', arr)

// 准确性测试
console.log(testRandom(quickSort))
function testRandom(sortFn) {
  if (!sortFn || typeof sortFn !== 'function') console.error('sortFn must be a function!')
  let size = 10000
  let arr = []
  let arr2 = []
  for (let i = 0; i < size; i++) {
    const v = Math.floor(Math.random() * size) + 1
    arr.push(v)
    arr2.push(v)
  }
  arr.sort((a, b) => a - b)
  sortFn(arr2)

  for (let i = 0; i < size; i++) {
    if (arr[i] !== arr2[i]) {
      return false
    }
  }

  return true
}

