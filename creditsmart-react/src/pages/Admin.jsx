import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import '../css/Admin.css';

const Admin = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editando, setEditando] = useState(null);
    const [formEdit, setFormEdit] = useState({});

    // Cargar solicitudes
    useEffect(() => {
        cargarSolicitudes();
    }, []);

    const cargarSolicitudes = async () => {
        try {
            setLoading(true);
            const querySnapshot = await getDocs(collection(db, 'solicitudes'));
            const solicitudesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setSolicitudes(solicitudesData);
        } catch (error) {
            console.error('Error al cargar solicitudes:', error);
            alert('Error al cargar las solicitudes');
        } finally {
            setLoading(false);
        }
    };

    // Formatear fecha
    const formatearFecha = (timestamp) => {
        if (!timestamp) return 'N/A';
        const fecha = timestamp.toDate();
        return fecha.toLocaleDateString('es-CO') + ' ' + fecha.toLocaleTimeString('es-CO');
    };

    // Formatear moneda
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    };

    // Iniciar edición
    const iniciarEdicion = (solicitud) => {
        setEditando(solicitud.id);
        setFormEdit(solicitud);
    };

    // Cancelar edición
    const cancelarEdicion = () => {
        setEditando(null);
        setFormEdit({});
    };

    // Guardar cambios
    const guardarCambios = async (id) => {
        try {
            const solicitudRef = doc(db, 'solicitudes', id);
            await updateDoc(solicitudRef, {
                nombre: formEdit.nombre,
                email: formEdit.email,
                telefono: formEdit.telefono,
                estado: formEdit.estado,
                monto: formEdit.monto,
                plazo: formEdit.plazo
            });
            alert('Solicitud actualizada exitosamente');
            setEditando(null);
            cargarSolicitudes();
        } catch (error) {
            console.error('Error al actualizar:', error);
            alert('Error al actualizar la solicitud');
        }
    };

    // Eliminar solicitud
    const eliminarSolicitud = async (id) => {
        if (!window.confirm('¿Estás seguro de eliminar esta solicitud?')) return;

        try {
            await deleteDoc(doc(db, 'solicitudes', id));
            alert('Solicitud eliminada');
            cargarSolicitudes();
        } catch (error) {
            console.error('Error al eliminar:', error);
            alert('Error al eliminar la solicitud');
        }
    };

    // Cambiar estado
    const cambiarEstado = async (id, nuevoEstado) => {
        try {
            const solicitudRef = doc(db, 'solicitudes', id);
            await updateDoc(solicitudRef, { estado: nuevoEstado });
            cargarSolicitudes();
        } catch (error) {
            console.error('Error al cambiar estado:', error);
        }
    };

    if (loading) {
        return (
            <div className="admin-container">
                <h2>Cargando solicitudes...</h2>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h2>Administración de Solicitudes</h2>
                <p className="total-solicitudes">Total: {solicitudes.length} solicitudes</p>
            </div>

            {solicitudes.length === 0 ? (
                <div className="no-solicitudes">
                    <p>No hay solicitudes registradas</p>
                </div>
            ) : (
                <div className="tabla-container">
                    <table className="tabla-solicitudes">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>Tipo</th>
                                <th>Monto</th>
                                <th>Plazo</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitudes.map(solicitud => (
                                <tr key={solicitud.id}>
                                    <td>{formatearFecha(solicitud.fechaSolicitud)}</td>
                                    <td>
                                        {editando === solicitud.id ? (
                                            <input
                                                type="text"
                                                value={formEdit.nombre}
                                                onChange={(e) => setFormEdit({ ...formEdit, nombre: e.target.value })}
                                            />
                                        ) : (
                                            solicitud.nombre
                                        )}
                                    </td>
                                    <td>
                                        {editando === solicitud.id ? (
                                            <input
                                                type="email"
                                                value={formEdit.email}
                                                onChange={(e) => setFormEdit({ ...formEdit, email: e.target.value })}
                                            />
                                        ) : (
                                            solicitud.email
                                        )}
                                    </td>
                                    <td>
                                        {editando === solicitud.id ? (
                                            <input
                                                type="tel"
                                                value={formEdit.telefono}
                                                onChange={(e) => setFormEdit({ ...formEdit, telefono: e.target.value })}
                                            />
                                        ) : (
                                            solicitud.telefono
                                        )}
                                    </td>
                                    <td>{solicitud.tipoCredito}</td>
                                    <td>
                                        {editando === solicitud.id ? (
                                            <input
                                                type="number"
                                                value={formEdit.monto}
                                                onChange={(e) => setFormEdit({ ...formEdit, monto: e.target.value })}
                                            />
                                        ) : (
                                            formatCurrency(solicitud.monto)
                                        )}
                                    </td>
                                    <td>
                                        {editando === solicitud.id ? (
                                            <input
                                                type="number"
                                                value={formEdit.plazo}
                                                onChange={(e) => setFormEdit({ ...formEdit, plazo: e.target.value })}
                                            />
                                        ) : (
                                            `${solicitud.plazo} meses`
                                        )}
                                    </td>
                                    <td>
                                        {editando === solicitud.id ? (
                                            <select
                                                value={formEdit.estado}
                                                onChange={(e) => setFormEdit({ ...formEdit, estado: e.target.value })}
                                            >
                                                <option value="pendiente">Pendiente</option>
                                                <option value="aprobado">Aprobado</option>
                                                <option value="rechazado">Rechazado</option>
                                            </select>
                                        ) : (
                                            <span className={`estado-badge ${solicitud.estado}`}>
                                                {solicitud.estado}
                                            </span>
                                        )}
                                    </td>
                                    <td className="acciones">
                                        {editando === solicitud.id ? (
                                            <>
                                                <button
                                                    className="btn-guardar"
                                                    onClick={() => guardarCambios(solicitud.id)}
                                                >
                                                    Guardar
                                                </button>
                                                <button
                                                    className="btn-cancelar"
                                                    onClick={cancelarEdicion}
                                                >
                                                    Cancelar
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    className="btn-editar"
                                                    onClick={() => iniciarEdicion(solicitud)}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    className="btn-eliminar"
                                                    onClick={() => eliminarSolicitud(solicitud.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Admin;
