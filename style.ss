Style.css
:root {
    --bg-app: #f8fafc;
    --bg-sidebar: #0f172a;
    --text-main: #1e293b;
    --text-muted: #64748b;
    --primary: #4f46e5;
    --primary-hover: #4338ca;
    --danger: #ef4444;
    --success: #10b981;
    --warning: #f59e0b;
    --border: #e2e8f0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: var(--bg-app);
    color: var(--text-main);
}

.app-container {
    display: flex;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    width: 260px;
    background-color: var(--bg-sidebar);
    color: white;
    padding: 30px 20px;
}
.sidebar h2 span { color: var(--primary); }
.sidebar .role { color: var(--text-muted); font-size: 0.85rem; margin-top: 5px; }

/* Main Content */
.main-content {
    flex: 1;
    padding: 40px;
}

/* Dashboard Stats */
.stats-grid {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
}
.stat-card {
    flex: 1;
    background: white;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--border);
}
.stat-card h3 { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 10px; }
.stat-card p { font-size: 1.8rem; font-weight: 700; }
.stat-card.alert p { color: var(--danger); }

/* Controls */
.controls-section {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    align-items: center;
}
.controls-section input, .controls-section select {
    padding: 10px 16px;
    border: 1px solid var(--border);
    border-radius: 8px;
    outline: none;
    font-size: 0.95rem;
}
#search-input { flex: 1; }

.btn-primary, .btn-primary-block {
    background-color: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s;
}
.btn-primary:hover, .btn-primary-block:hover { background-color: var(--primary-hover); }
.btn-primary-block { width: 100%; margin-top: 15px; }

/* Table */
.table-section {
    background: white;
    border-radius: 12px;
    border: 1px solid var(--border);
    overflow: hidden;
}
.stock-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}
.stock-table th, .stock-table td {
    padding: 16px 24px;
    border-bottom: 1px solid var(--border);
}
.stock-table th { background-color: #f1f5f9; color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase; }

/* Status Badges */
.badge {
    padding: 4px 8px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 600;
}
.badge.in-stock { background: #d1fae5; color: #065f46; }
.badge.low-stock { background: #fef3c7; color: #92400e; }
.badge.out-of-stock { background: #fee2e2; color: #991b1b; }

/* Action Buttons */
.btn-edit, .btn-delete {
    background: none; border: none; cursor: pointer; font-weight: 500; font-size: 0.9rem; margin-right: 10px;
}
.btn-edit { color: var(--primary); }
.btn-delete { color: var(--danger); }

/* Modal */
.modal {
    display: none; position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4);
}
.modal-content {
    background: white; margin: 10% auto; padding: 30px; border-radius: 12px; width: 450px; position: relative;
}
.close-modal { position: absolute; right: 20px; top: 20px; font-size: 1.5rem; cursor: pointer; }
.form-group { margin-bottom: 15px; }
.form-group label { display: block; margin-bottom: 5px; font-size: 0.9rem; color: var(--text-muted); }
.form-group input, .form-group select { width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; }
