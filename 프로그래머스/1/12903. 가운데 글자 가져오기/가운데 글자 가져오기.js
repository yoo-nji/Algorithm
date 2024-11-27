const solution = (s) => s.length % 2 === 0 ? s.slice(parseInt(s.length/2)-1, parseInt(s.length/2)+1) : s.charAt(parseInt(s.length/2))
