// Function to display the selected project and hide the others
function showProject(projectNumber) {
  // First, hide all projects
  const allProjects = document.querySelectorAll('.project');
  allProjects.forEach(project => {
    project.style.display = 'none';
  });

  // Then, display the selected project
  const selectedProject = document.getElementById(`project${projectNumber}`);
  if (selectedProject) {
    selectedProject.style.display = 'block';
  }
}
