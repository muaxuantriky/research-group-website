function Members() {
  const members = [
    { name: "Tiền Văn Mạnh", role: "Trưởng nhóm", img: "/profile1.jpg" },
    { name: "Trần Khoa Đăng", role: "Nhà nghiên cứu", img: "/profile2.jpg" },
    { name: "Võ Thanh Được", role: "Thư ký", img: "/profile3.jpg" },
  ];

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-blue-700">Thành viên nhóm</h2>
      <div className="flex justify-center gap-8 mt-4">
        {members.map((member, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h3 className="mt-2 text-xl">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
