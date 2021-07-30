let title = 'about me'
// 1
title.replace(' ', '-') // replace only first

// 2
const expression = new RegExp(' ', 'g')
title.replace(expression, '-')

// 3 ES2021
title.replaceAll(' ', '-')



