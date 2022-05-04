//kdyz se klikne na #tlacitko: hodit kostkami, zapocitat hod do tabulky a grafu
$("#tlacitko").click(function () {
  //zobrazit komentar, vybrat dve nahodna cisla 1-6 a vypsat je
  $("#pokec").html(
    "Zdejší randomizační prográmek ti zvrací tyto dvě kostečné hodnoty:"
  );
  var cisla = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];
  $("#vystup").html(cisla.join(", "));

  //zapsat hod do tabulky
  $(
    "#".concat(cisla.reduce((soucet, kostka) => (soucet += kostka)).toString())
  ).html(function (n, current) {
    return Number(current) + 1;
  });

  //obnovit data grafu
  chart.updateSeries([
    {
      data: [
        $("#2").text().trim(),
        $("#3").text().trim(),
        $("#4").text().trim(),
        $("#5").text().trim(),
        $("#6").text().trim(),
        $("#7").text().trim(),
        $("#8").text().trim(),
        $("#9").text().trim(),
        $("#10").text().trim(),
        $("#11").text().trim(),
        $("#12").text().trim()
      ]
    }
  ]);
});

//nastavit parametry grafu
var options = {
  series: [
    {
      name: "Inflation",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ],
  chart: {
    height: 350,
    type: "bar"
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "bottom" // top, center, bottom
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"]
    }
  },

  xaxis: {
    categories: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    position: "top",
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: {
      enabled: true
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  },
  title: {
    text: "Pěkný grafík",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      color: "#444"
    }
  }
};

//vytvorit graf
var chart = new ApexCharts(document.querySelector("#grafik"), options);
chart.render();
