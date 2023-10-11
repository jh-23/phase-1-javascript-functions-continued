// code your solution here

function saturdayFun(activity = 'roller-skate') {
        return(`This Saturday, I want to ${activity}!`)
    }

const mondayWork = function(activity = 'go to the office') {
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(newParameter = "*") {
    const innerFunction = function(parameter = "special") {
        return(`You are ${newParameter}${parameter}${newParameter}!`)
    }
    return innerFunction
}