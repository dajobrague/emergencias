# Lista de Tareas para Implementar el Tutorial Interactivo

A continuación se presenta la lista de tareas organizadas por página para implementar el tutorial que explique cada componente del sistema.

## Tareas Generales

- [x] Definir el diseño y estilo del tutorial (colores, tipografía, iconos)
- [x] Crear componente base de tutorial que se pueda reutilizar en todas las páginas
- [x] Desarrollar sistema de navegación entre pasos del tutorial
- [x] Implementar almacenamiento de progreso del usuario
- [x] Crear animaciones para resaltar elementos durante la explicación

## 1. Panel de Seguridad Vial

- [x] Introducción al panel (propósito y descripción general)
  - [x] Añadir botón de tutorial a la página
  - [x] Crear los pasos básicos del tutorial
  - [x] Verificar que los selectores CSS son correctos
  - [x] Probar la navegación entre los pasos
- [x] Explicación de cada tarjeta de servicio y su funcionalidad
  - [x] Wisetrack
  - [x] GPSChile
  - [x] Gauss Control
  - [x] WebControl
  - [x] Explor-K
- [x] Tutorial de la sección de actualizaciones y timeline
  - [x] Crear paso para el timeline de Twitter
  - [x] Verificar funcionamiento en diferentes resoluciones
- [x] Explicación de la sección de información de contacto
  - [x] Supervisores de ruta
  - [x] Centros de control
  - [x] Asegurar visibilidad correcta para todos los elementos
- [x] Guía para el uso de formularios de registro
  - [x] Registro de incidentes
  - [x] Control de camiones
  - [x] Añadir pasos específicos para campos importantes

**Notas**: Se corrigieron problemas con los selectores CSS y se implementó un mejor manejo de modales. Se agregó la funcionalidad para que el botón "Atrás" funcione correctamente y se optimizó la transición entre pasos del tutorial.

## 2. Wisetrack

- [x] Introducción a la plataforma Wisetrack
- [x] Explicación de la funcionalidad principal e instrucción de acceso al sistema

**Notas**: Se implementó un tutorial breve de un solo paso que explica la funcionalidad principal de la plataforma ADAS, sus beneficios y cómo acceder al sistema.

## 3. GPSChile

- [x] Introducción a GPSChile
- [x] Explicación de la funcionalidad principal e instrucción de acceso al sistema

**Notas**: Se creó un tutorial conciso de un solo paso que explica la función principal del sistema de seguimiento GPS y cómo acceder a la plataforma.

## 4. Gauss

- [x] Introducción al sistema Gauss
- [x] Explicación de la funcionalidad principal e instrucción de acceso al sistema

**Notas**: Se desarrolló un tutorial introductorio de un solo paso que explica el propósito del sistema de control de fatiga y cómo acceder a todas sus funcionalidades.

## 5. WebControl

- [x] Introducción a WebControl
- [x] Explicación de la funcionalidad principal e instrucción de acceso al sistema

**Notas**: Se implementó un tutorial breve de un solo paso que explica la función principal del sistema de acreditación y control de acceso, y cómo ingresar a la plataforma.

## 6. Explor-K

- [x] Introducción a Explor-K
- [x] Explicación de la funcionalidad principal e instrucción de acceso al sistema

**Notas**: Se creó un tutorial introductorio de un solo paso sobre el sistema de gestión de tránsito en operaciones mineras y cómo acceder a todas sus funcionalidades.

## 7. Repositorio (Document Panel)

- [x] Introducción al sistema de gestión documental
- [x] Tutorial del buscador de documentos
- [x] Explicación de las categorías de documentos
- [x] Guía para usar el visor de documentos
- [x] Tutorial para cargar documentos nuevos
- [x] Explicación del historial de versiones

**Notas**: Se implementó un tutorial detallado con 22 pasos que cubren todas las funcionalidades del sistema de gestión documental. Se corrigieron problemas con selectores CSS complejos para garantizar la compatibilidad con `querySelector`. Se optimizó el rendimiento del componente con `useMemo` para evitar cálculos innecesarios.

## 8. Registros (Records Panel)

- [x] Introducción al sistema de registros
- [x] Explicación de la tabla de registros
- [x] Tutorial de uso de filtros de búsqueda
- [x] Guía para crear un nuevo registro
- [x] Explicación de la visualización de detalles
- [x] Tutorial para exportar datos

**Notas**: Se implementó un tutorial detallado con 19 pasos que cubren todas las funcionalidades del panel de registros, incluyendo el sistema de filtros, la creación de nuevos registros, la visualización de datos históricos y la exportación de archivos. Se utilizaron selectores CSS compatibles para asegurar un funcionamiento correcto.

## 9. Simuladores (Simulators Panel)

- [x] Introducción a la plataforma de simulación
- [x] Tutorial de selección de escenarios
- [x] Explicación de los controles de simulación
- [x] Guía para configurar parámetros
- [x] Tutorial de interpretación de resultados
- [x] Explicación del historial de simulaciones

**Notas**: Se implementó un tutorial interactivo con 6 pasos que explican las diferentes secciones del panel de simuladores, incluyendo la selección de escenarios, controles de simulación, configuración de parámetros, resultados y el historial de simulaciones.

## 10. Emergencias (Emergency Panel)

- [x] Introducción al sistema de gestión de emergencias
- [x] Explicación del mapa de emergencias activas
- [x] Tutorial para reportar una nueva emergencia
- [x] Guía de la timeline de eventos
- [x] Explicación de la gestión de recursos
- [x] Tutorial de protocolos de actuación
- [x] Explicación del sistema de notificaciones
- [x] Guía del dashboard de estado actual

**Notas**: Se implementó un tutorial interactivo con 8 pasos que explican las diferentes secciones del panel de emergencias, incluyendo el mapa, el formulario para reportar nuevas emergencias, la timeline de eventos, la gestión de recursos, protocolos de actuación, sistema de notificaciones y el dashboard de estado actual.

## 11. Unidades (Emergency Units Panel)

- [x] Introducción a la gestión de unidades
- [x] Explicación del listado de unidades
- [x] Tutorial para verificar estado y ubicación
- [x] Guía para la asignación de unidades
- [x] Explicación del historial de despliegues
- [x] Tutorial de acceso a información de contacto
- [x] Guía de mantenimiento y disponibilidad

**Notas**: Se implementó un tutorial interactivo con 11 pasos que explican las funcionalidades del panel de gestión de unidades, incluyendo los filtros de búsqueda, el listado de unidades, información de estado y ubicación, historial de checklists, perfiles detallados y la gestión del personal asignado.

## 12. Personal (Firefighters, Médicos, etc)

- [x] Introducción a la gestión de personal
- [x] Explicación del listado de personal
- [x] Tutorial para visualizar y editar información
- [x] Guía para asignación de roles y equipos
- [x] Explicación del proceso de formación y certificación
- [x] Tutorial sobre permisos y accesos
- [x] Guía para verificar estado y disponibilidad

**Notas**: Se implementó un tutorial interactivo con 8 pasos que explican las funcionalidades del panel de gestión de personal, incluyendo la búsqueda y filtros, estadísticas en tiempo real, visualización del listado de personal con sus estados, y las opciones para ver perfiles detallados y agregar nuevos miembros al equipo.

## 13. Dashboard

- [x] Introducción general al dashboard
- [x] Explicación de filtros de tiempo
- [x] Tutorial de filtros específicos
- [x] Guía de estadísticas principales
- [x] Explicación de gráficos y visualizaciones
- [x] Tutorial de alertas recientes
- [x] Guía para generar reportes

**Notas**: Se implementó un tutorial interactivo con 17 pasos que explican todas las funcionalidades del Dashboard, incluyendo los filtros de tiempo, panel de filtros específicos, estadísticas principales y cada uno de los gráficos individualmente: tipos de vehículos, sustancias peligrosas, tipos de incidentes, actividad de incidentes, cantidad de alertas, cantidad de emergencias, top 5 incidentes por tipo, por vehículo, por involucrado, por empresa, alertas por tipo, y los paneles de actividad reciente. 