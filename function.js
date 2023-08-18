// Common Function:

function calculateById(inputId) {
    const getElementId = document.getElementById(inputId);
    const getElementField = getElementId.value ;
    const value = parseFloat(getElementField);
    return value;
}

function elementInnertext(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// Triangle Area Calculation

document.getElementById('triangle-btn').addEventListener('click', function(){
    const base = calculateById('triangle-base');

    const height = calculateById('triangle-height');

    const area = 0.5*base*height;

    elementInnertext('triangle-Area', area);
});

// Rectangle Area Calculation

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const width = calculateById('rectangle-width');

    const length = calculateById('rectangle-length');

    const area = width * length;

    elementInnertext('rectangle-Area', area);
});

// Parallelogram Area Calculation

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBase = calculateById('parallelogram-base');

    const parallelogramHeight = calculateById('parallelogram-height');

    const area = parallelogramBase * parallelogramHeight;

    elementInnertext('parallelogram-Area', area);
});

// Rhombus Area Calculation

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const diameter1 = calculateById('rhombus-dia-1');

    const diameter2 = calculateById('rhombus-dia-2');

    const area = diameter1 * diameter2;

    elementInnertext('rhombus-Area', area);
});

// Pentagon Area Calculation

document.getElementById('pentagon-btn').addEventListener('click', function(){
    const perimeter = calculateById('pentagon-perimeter');

    const pentagonBase = calculateById('pentagon-base');

    const area = 0.5 * perimeter * pentagonBase;

    elementInnertext('pentagon-Area', area);
});

// Ellipse Area Calculation

document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseArea = calculateById('ellipse-area');

    const ellipseBase = calculateById('ellipse-base');

    const area = 3.1416 * ellipseArea * ellipseBase;

    elementInnertext('ellipse-Area', area);
});

