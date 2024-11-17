const solution = (s) => [...s].filter(str => str.toLowerCase() === 'p').length === [...s].filter(str => str.toLowerCase() === 'y').length
