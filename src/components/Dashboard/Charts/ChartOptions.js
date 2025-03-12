// Opciones comunes para los gráficos
export const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 12,
        padding: 15,
        font: {
          size: 11
        }
      }
    },
    title: {
      display: true,
      text: 'Actividad por Período',
      font: {
        size: 14,
        weight: 'bold'
      },
      padding: {
        top: 10,
        bottom: 15
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: 10,
      titleFont: {
        size: 12
      },
      bodyFont: {
        size: 12
      },
      displayColors: true
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 10
        },
        maxRotation: 45,
        minRotation: 45
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      },
      ticks: {
        font: {
          size: 10
        }
      }
    }
  }
};

export const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 12,
        padding: 15,
        font: {
          size: 11
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: 10,
      titleFont: {
        size: 12
      },
      bodyFont: {
        size: 12
      },
      displayColors: true
    }
  },
  cutout: '70%',
}; 