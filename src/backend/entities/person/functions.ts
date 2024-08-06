const generateNickname = (name: string, gender: "male" | "female") => {
  if (gender === "male") return "Pak. " + name;
  return "Ibu. " + name;
};
