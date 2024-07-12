const randomItem = '清晨林间静谧鸟鸣声声清新鲜花香甜空气中弥漫一位旅人背行囊踏轻盈步伐沿蜿蜒小径前行停脚步闭双眼深呼吸感受大自然宁静和谐远处山峦起伏云雾缭绕如动人山水画卷太阳缓缓升起金色光芒洒满大地生机勃勃旅人继续旅程心中充满未知好奇期待每步踏出生活热爱探索沿途遇溪流听见潺潺水声见野花闻阵阵芬芳此刻时间凝固留心灵自然对话让人忘却尘世烦恼沉浸这份纯净美好之中'
export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const randomIdiomArray = (include: string) => {
    const result = [include]
    randomItem.split('')
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => {
            if (result.length < 4)
                result.push(value)
        })
    // console.log("randomIdiomArray", result, "include", include)
    return shuffle(result)
}

// declare the function
const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // console.log("shuffle", array)
    return array;
};