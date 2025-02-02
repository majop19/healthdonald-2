import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const getItems = async (category) => {
  let request = collection(db, "items");

  if (category) {
    request = query(request, where("category", "==", category));
  }

  const docSnap = await getDocs(request);

  const data = [];
  docSnap.forEach((d) => {
    data.push({
      id: d.id,
      ...d.data(),
    });
  });

  return data;
};
