export type Profile = {
  fullName: string;
  initials: string;
  studentId: string;
  major: string;
  faculty: string;
  university: string;
  courseCode: string;
  courseName: string;
  className: string;
  lecturer: string | null;
  email: string | null;
  shortBio: string;
  learningGoal: string;
  interests: string[];
  quote: string;
  heroImage: string;
  heroImageAlt: string;
};

export const profile: Profile = {
  fullName: "Nguyễn Ngọc Khánh Linh",
  initials: "KL",
  studentId: "25040283",
  major: "Sư phạm tiếng Hàn Quốc",
  faculty: "Khoa Ngôn ngữ và Văn hóa Hàn Quốc",
  university: "Trường Đại học Ngoại ngữ, ĐHQGHN",
  courseCode: "VNU1001_E252055",
  courseName: "Nhập môn Công nghệ số và Trí tuệ nhân tạo",
  className: "VNU1001_E252055",
  lecturer: null,
  email: null,
  shortBio:
    "Mình là Khánh Linh, sinh viên Sư phạm tiếng Hàn Quốc. Portfolio này ghi lại sáu bài thực hành trong hành trình làm quen với công nghệ số và AI.",
  learningGoal:
    "Sử dụng công cụ số chủ động, biết kiểm chứng thông tin và ứng dụng AI có trách nhiệm vào học tập, nghiên cứu và công việc giảng dạy sau này.",
  interests: ["Tiếng Hàn", "Giáo dục", "Công nghệ số", "Sáng tạo nội dung"],
  quote: "Học công nghệ để hiểu hơn, làm tốt hơn và vẫn giữ tiếng nói của chính mình.",
  heroImage: "/images/profile/khanh-linh-avatar.webp",
  heroImageAlt: "Ảnh chân dung Nguyễn Ngọc Khánh Linh giữa vườn hoa",
};
