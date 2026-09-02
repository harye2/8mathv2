const STUDENTS = [
    "Guadalupe Aleman", "Samantha Arroyo", "Samuel Atencia", "Natan Bertel",
    "Manuela Caldera", "Julian Campillo", "Samuel Cantero", "Jeronimo Carcamo",
    "Juan Castillo", "Fernando Celsa", "Maria Coronado", "Samuel Corral",
    "Sara Correa", "Diego Cruz", "Santiago Cuello", "Licee De Hoyos",
    "Alejandro Delgado", "Valery Diaz", "Isaac Falon", "Mateo Garay",
    "Jose Garcia", "Daniel Garcia", "Esteban Genes", "Thaliana Giraldo",
    "Jeronimo Gonzalez", "Hover Grisales", "Samuel Hernandez", "Joao Herrera",
    "Brian Jimenez", "Mateo Luna", "Johan Marquez", "Natalia Mendez",
    "Juan Montiel", "Sheyla Muñoz", "Salome Osorio", "Mariangel Payares",
    "Salome Percy", "Brenda Pereira", "Juan Perez", "Laura Quiroz",
    "Ariam Ramos", "Jesus Ramos", "Mariana Ricardo", "Sarah Rios",
    "Jhon Rivera", "Juan Rodriguez", "Saray Romero", "Juan Salcedo",
    "Jose Saldarriaga", "Martin Sanchez", "Sammy Sanchez", "Salome Serpa",
    "Samanta Soto", "Kadisha Soto", "Guadalupe Vidal", "Adriana Zuluaga"
];

function populateStudentsDropdown() {
    const select = document.getElementById('player-name-input');
    if (!select) return;

    // Limpiar todas las opciones existentes excepto la primera ("Select your name...")
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Agregar estudiantes de la lista plana
    STUDENTS.forEach(studentName => {
        const option = document.createElement('option');
        option.value = studentName;
        option.textContent = studentName;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentsDropdown);
