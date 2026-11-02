import { ref } from "vue";
import { useToast } from "vue-toastification";

export interface TodoItem {
  id: number;
  name: string;
  isEditing?: boolean;
}

const list = ref<string>("");
const id = ref<number>(0);
const listItems = ref<TodoItem[]>([]);
const toast = useToast();

export function useTodos() {
  function handleAddItem() {
    if (list.value.trim() !== "") {
      listItems.value.push({ name: list.value, id: id.value, isEditing: false });
      id.value++;
      list.value = "";
      toast.success("ToDo Added Successfully!");
    }
  }

  function handleDeleteItem(id: number) {
    listItems.value = listItems.value.filter((item) => item.id !== id);
    toast.error("ToDo Deleted Successfully!");
  }

  function toggleEditMode(item: TodoItem) {
    item.isEditing = !item.isEditing;
    if (!item.isEditing) {
      toast.success("ToDo Updated Successfully!");
    }
  }

  return {
    list,
    id,
    listItems,
    handleAddItem,
    handleDeleteItem,
    toggleEditMode,
  };
}
