function Projects() {
  const projects = [
    "Hệ thống tách nước",
    "Nghiên cứu vật liệu từ tính thế hệ mới",
    "Phân tích điện hóa trong ứng dụng cảm biến",
  ];

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-blue-700">Đề tài nghiên cứu</h2>
      <ul className="mt-4 list-disc list-inside">
        {projects.map((project, index) => (
          <li key={index} className="text-lg text-gray-600">
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
