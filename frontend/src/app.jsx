import { useEffect, useState } from "react";
        <button onClick={addTask}>Add Task</button>
      </div>

      <div style={styles.listBox}>
        {tasks.map((t, index) => (
          <div key={index} style={styles.taskItem}>
            {t}
          </div>
        ))}
      </div>

      <button onClick={getMotivation}>
        Ask AI Coach
      </button>

      {aiMessage && (
        <div style={styles.aiBox}>
          {aiMessage}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },

  timerBox: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
  },

  taskBox: {
    display: "flex",
    gap: "10px",
  },

  listBox: {
    width: "300px",
  },

  taskItem: {
    background: "#1e293b",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
  },

  aiBox: {
    maxWidth: "600px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    lineHeight: "1.6",
  },
};

export default App;
