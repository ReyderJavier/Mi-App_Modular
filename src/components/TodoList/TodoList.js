import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // === Cargar datos de Firebase en tiempo real ===
  useEffect(() => {
    const unsubTasks = onSnapshot(
      query(collection(db, "tasks"), orderBy("createdAt", "asc")),
      (snapshot) => {
        setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );

    const unsubCompleted = onSnapshot(
      query(collection(db, "completed"), orderBy("completedAt", "desc")),
      (snapshot) => {
        setCompleted(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );

    const unsubHistorial = onSnapshot(
      query(collection(db, "historial"), orderBy("deletedAt", "desc")),
      (snapshot) => {
        setHistorial(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    );

    return () => {
      unsubTasks();
      unsubCompleted();
      unsubHistorial();
    };
  }, []);

  // === Agregar tarea nueva ===
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    await addDoc(collection(db, "tasks"), {
      text: inputValue,
      isComplete: false,
      createdAt: serverTimestamp(),
    });
    setInputValue("");
  };

  // === Completar tarea → mover a colección "completed" ===
  const completeTask = async (task) => {
    const taskRef = doc(db, "tasks", task.id);
    await deleteDoc(taskRef);

    await addDoc(collection(db, "completed"), {
      text: task.text,
      isComplete: true,
      completedAt: serverTimestamp(),
    });
  };

  // === Eliminar tarea → mover a colección "historial" ===
  const deleteTask = async (task) => {
    const taskRef = doc(db, "tasks", task.id);
    await deleteDoc(taskRef);

    await addDoc(collection(db, "historial"), {
      text: task.text,
      deletedAt: serverTimestamp(),
    });
  };

  // === Restaurar tarea desde completadas ===
  const restoreFromCompleted = async (task) => {
    const taskRef = doc(db, "completed", task.id);
    await deleteDoc(taskRef);

    await addDoc(collection(db, "tasks"), {
      text: task.text,
      isComplete: false,
      createdAt: serverTimestamp(),
    });
  };

  // === Restaurar tarea desde historial ===
  const restoreFromHistorial = async (task) => {
    const taskRef = doc(db, "historial", task.id);
    await deleteDoc(taskRef);

    await addDoc(collection(db, "tasks"), {
      text: task.text,
      isComplete: false,
      createdAt: serverTimestamp(),
    });
  };

  // === Función para formatear fecha ===
  const formatDate = (timestamp) => {
    if (!timestamp) return "Sin fecha";
    const date = timestamp.toDate();
    return date.toLocaleString("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="todo-list-container">
      <h2> Lista de Tareas</h2>

      {/* Formulario para agregar tareas */}
      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una nueva tarea..."
        />
        <button type="submit">Agregar</button>
      </form>

      {/* === Sección de tareas pendientes === */}
      <h3> Tareas Pendientes</h3>
      {tasks.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div className="task-info">
                <span>{task.text}</span>
                <small className="task-date">
                   Creada: {formatDate(task.createdAt)}
                </small>
              </div>
              <div className="task-buttons">
                <button onClick={() => completeTask(task)}>✅</button>
                <button onClick={() => deleteTask(task)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* === Sección de tareas completadas === */}
      <div className="completed-list">
        <h3>✅ Tareas Completadas</h3>
        {completed.length === 0 ? (
          <p>No hay tareas completadas</p>
        ) : (
          <ul>
            {completed.map((item) => (
              <li key={item.id} className="completed">
                <div className="task-info">
                  <span>{item.text}</span>
                  <small className="task-date">
                     Completada: {formatDate(item.completedAt)}
                  </small>
                </div>
                <button
                  className="restore-btn"
                  onClick={() => restoreFromCompleted(item)}
                >
                  Restaurar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* === Sección del historial === */}
      <div className="historial-list">
        <h3>🗑️ Historial de Tareas Eliminadas</h3>
        {historial.length === 0 ? (
          <p>No hay historial</p>
        ) : (
          <ul>
            {historial.map((item) => (
              <li key={item.id}>
                <div className="task-info">
                  <span>{item.text}</span>
                  <small className="task-date">
                     Eliminada: {formatDate(item.deletedAt)}
                  </small>
                </div>
                <button
                  className="restore-btn"
                  onClick={() => restoreFromHistorial(item)}
                >
                  Restaurar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
