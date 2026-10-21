export function personUpdate(person) {
    if (person.gender === 'female') {
        delete person.age;
    } else if (person.gender === 'male') {
        if (!person.hasOwnProperty('income')) {
            person.income = 100000;
        }
    }
    return person;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const allKeys = [...Object.keys(obj1), ...Object.keys(obj2), ...Object.keys(obj3)];
    const uniqueKeys = [...new Set(allKeys)];
    return uniqueKeys.sort();
}

export function objectClone(obj, count) {
    const clones = [];
    for (let i = 0; i < count; i++) {
        const clone = JSON.parse(JSON.stringify(obj));
        clone.id = i;
        clones.push(clone);
    }
    return clones;
}
