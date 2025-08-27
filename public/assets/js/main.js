(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function(e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full')) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
              color: []
            },
            {
              background: []
            }
          ],
          [{
              script: "super"
            },
            {
              script: "sub"
            }
          ],
          [{
              list: "ordered"
            },
            {
              list: "bullet"
            },
            {
              indent: "-1"
            },
            {
              indent: "+1"
            }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  /**
   * Initiate Datatables
   */
  // const datatables = select('.datatable', true)
  // datatables.forEach(datatable => {
  //   new simpleDatatables.DataTable(datatable);
  // })

  /**
   * Autoresize echart charts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function() {
        select('.echart', true).forEach(getEchart => {
          echarts.getInstanceByDom(getEchart).resize();
        })
      }).observe(mainContainer);
    }, 200);
  }

})();

$(document).ready(function () {
  $("#example").DataTable({
    scrollX: true,
  });

  // JQUERY CALANDER
  $(function () {
    $(".datepicker").datepicker();
  });

  $('[data-toggle="toggle"]').change(function () {
    // $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
    $(this).parents().next(".hide").toggle();
  });
});
















// am charts 1st net worth pie chart 


am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    layout: root.verticalLayout
  }));
  
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  var series = chart.series.push(am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category"
  }));
  
  
  // Set data
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
  series.data.setAll([
    { value: 10, category: "Business" },
    { value: 9, category: "Cash" },
    { value: 6, category: "Insurance" },
    { value: 5, category: "Marketable Securities" },
    { value: 4, category: "Other" },
    { value: 3, category: "Real Estate" },
  ]);
  
  
  // Create legend
  // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
  var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.percent(50),
    x: am5.percent(50),
    marginTop: 15,
    marginBottom: 15
  }));
  
  legend.data.setAll(series.dataItems);
  
  
  // Play initial series animation
  // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
  series.appear(1000, 100);
  
  }); // end am5.ready()



// am charts 2nd passive bar chart


am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv1");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "none",
    wheelY: "none"
  }));
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineY.set("visible", false);
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0,
    categoryField: "name",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  xRenderer.grid.template.set("visible", false);
  
  var yRenderer = am5xy.AxisRendererY.new(root, {});
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0,
    min: 0,
    extraMax: 0.1,
    renderer: yRenderer
  }));
  
  yRenderer.grid.template.setAll({
    strokeDasharray: [2, 2]
  });
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    sequencedInterpolation: true,
    categoryXField: "name",
    tooltip: am5.Tooltip.new(root, { dy: -25, labelText: "{valueY}" })
  }));
  
  
  series.columns.template.setAll({
    cornerRadiusTL: 5,
    cornerRadiusTR: 5
  });
  
  series.columns.template.adapters.add("fill", (fill, target) => {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });
  
  series.columns.template.adapters.add("stroke", (stroke, target) => {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });
  
  // Set data
  var data = [
    {
      name: "Social Security",
      value: 30654,
    },
    {
      name: "Pretend Rental Property",
      value: 25456,
    },    
  ];
  
  series.bullets.push(function() {
    return am5.Bullet.new(root, {
      locationY: 1,
      sprite: am5.Picture.new(root, {
        templateField: "bulletSettings",
        width: 50,
        height: 50,
        centerX: am5.p50,
        centerY: am5.p50,
        shadowColor: am5.color(0x000000),
        shadowBlur: 4,
        shadowOffsetX: 4,
        shadowOffsetY: 4,
        shadowOpacity: 0.6
      })
    });
  });
  
  xAxis.data.setAll(data);
  series.data.setAll(data);
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);
  
  }); // end am5.ready()


// am charts 3rd risk allocation bubble chart

am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv2");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelY: "zoomXY",
    pinchZoomX:true,
    pinchZoomY:true
  }));
  
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  xAxis.children.moveValue(am5.Label.new(root, {
    text: "Time Horizon",
    x: am5.p50,
    centerX: am5.p50
  }), xAxis.children.length - 1);
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
      inversed: false
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  yAxis.children.moveValue(am5.Label.new(root, {
    rotation: -90,
    text: "Relative Reward/Risk                              ",
    y: am5.p50,
    centerX: am5.p50
  }), 0);
  
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    calculateAggregates: true,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "y",
    valueXField: "x",
    valueField: "value",
    seriesTooltipTarget:"bullet",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "[bold]{title}[/]\nLife expectancy: {valueY.formatNumber('#.0')}\nGDP: {valueX.formatNumber('#,###.')}\nPopulation: {value.formatNumber('#,###.')}"
    })
  }));
  
  series.strokes.template.set("visible", false);
  
  
  // Add bullet
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
  var circleTemplate = am5.Template.new({});
  circleTemplate.adapters.add("fill", function(fill, target) {
    var dataItem = target.dataItem;
    if (dataItem) {
      return am5.Color.fromString(dataItem.dataContext.color);
    }
    return fill
  });
  series.bullets.push(function() {
    var bulletCircle = am5.Circle.new(root, {
      radius: 5,
      fill: series.get("fill"),
      fillOpacity: 0.8
    }, circleTemplate);
    return am5.Bullet.new(root, {
      sprite: bulletCircle
    });
  });
  
  
  // Add heat rule
  // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
  series.set("heatRules", [{
    target: circleTemplate,
    min: 3,
    max: 60,
    dataField: "value",
    key: "radius"
  }]);
  
  // Set data
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Setting_data
  series.data.setAll([
    {
      "title": "Bitcoin",
      "id": "BT",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 10197.4191892126,
      "y": 76.088,
      "value": 121249266
    },
{
      "title": "Business",
      "id": "BS",
      "color": "#eea638",
      "continent": "asia",
      "x": 15427.6167470064,
      "y": 73.989,
      "value": 71011137
    },
{
      "title": "IRA's",
      "id": "IR",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 42296.2316492477,
      "y": 72.797,
      "value": 315791284
    },
{
      "title": "Personal Home",
      "id": "PH",
      "color": "#d8854f",
      "continent": "europe",
      "x": 15427.6167470064,
      "y": 67.874,
      "value": 142703181
    },
    {
      "title": "Cash",
      "id": "AR",
      "color": "#86a965",
      "continent": "south_america",
      "x": 15714.1031814398,
      "y": 76.128,
      "value": 41118986
    },
    {
      "title": "Social Security",
      "id": "AM",
      "color": "#d8854f",
      "continent": "europe",
      "x": 5059.0879636443,
      "y": 74.469,
      "value": 3108972
    },
  ]);
  
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis,
    yAxis: yAxis,
    snapToSeries: [series]
  }));
  
  
  // Add scrollbars
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
  }));
  
  chart.set("scrollbarY", am5.Scrollbar.new(root, {
    orientation: "vertical"
  }));
  
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);
  
  }); // end am5.ready()

  // am chart 4th portfolio langevity graph chart

  am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv3");
    
    root.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"]
    });
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true
    }));
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    
    
    // Data
    var data = [
      { year: "1950", value: 2 },
      { year: "1951", value: 4 },
      { year: "1952", value: 15 },
      { year: "1953", value: 21 },
      { year: "1954", value: 25 },
      { year: "1955", value: 18 },
      { year: "1956", value: 33 },
      { year: "1957", value: 103 },
      { year: "1958", value: 88 },
      { year: "1959", value: 205 },
      { year: "1960", value: 333 },
      { year: "1961", value: 185 },
      { year: "1962", value: 788 },
      { year: "1963", value: 1020 },
      { year: "1964", value: 658 },
      { year: "1965", value: 201 },
      { year: "1966", value: 1054 },
      { year: "1967", value: 999 },
      { year: "1968", value: 2002 },
      { year: "1969", value: 2235 },
      { year: "1970", value: 1423 },
      { year: "1971", value: 3564 },
      { year: "1972", value: 3987 },
      { year: "1973", value: 4235 },
      { year: "1974", value: 3487 },
      { year: "1975", value: 2987 },
      { year: "1976", value: 6789 },
      { year: "1977", value: 7354 },
      { year: "1978", value: 5457 },
      { year: "1979", value: 6784 },
      { year: "1980", value: 7878 },
      { year: "1981", value: 6987 },
      { year: "1982", value: 5787 },
      { year: "1983", value: 8978 },
      { year: "1984", value: 10003 },
      { year: "1985", value: 7898 },
      { year: "1986", value: 9878 },
      { year: "1987", value: 11235 },
      { year: "1988", value: 10248 },
      { year: "1989", value: 14589 },
      { year: "1990", value: 19878 },
      { year: "1991", value: 20325 },
      { year: "1992", value: 18978 },
      { year: "1993", value: 17485 },
      { year: "1994", value: 15234 },
      { year: "1995", value: 12345 },
      { year: "1996", value: 12584 },
      { year: "1997", value: 13698 },
      { year: "1998", value: 12568 },
      { year: "1999", value: 12587 },
      { year: "2000", value: 16987 },
      { year: "2001", value: 16779 },
      { year: "2002", value: 19878 },
      { year: "2003", value: 15687 },
      { year: "2004", value: 19878 },
      { year: "2005", value: 23212 }
    ];
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "year", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      logarithmic: true,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "year",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueX}: {valueY}"
      })
    }));
    
    series.strokes.template.setAll({
      strokeWidth: 3
    });
    
    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(root, {
      dateFormat: "yyyy",
      dateFields: ["year"]
    });
    
    series.data.setAll(data);
    
    
    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()