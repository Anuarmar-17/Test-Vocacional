"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AdminProvider, useAdmin } from "@/src/admin/context/AdminContext";
import { useAuth } from "@/src/context/AuthContext";
import AdminSidebar from "@/src/admin/components/layout/AdminSidebar";
import AdminTopBar from "@/src/admin/components/layout/AdminTopBar";
import AdminOverviewView from "@/src/admin/views/AdminOverviewView";
import AdminPreguntasView from "@/src/admin/views/AdminPreguntasView";
import AdminProfesionesView from "@/src/admin/views/AdminProfesionesView";
import AdminUsuariosView from "@/src/admin/views/AdminUsuariosView";
import { COLORS } from "@/src/constants/vocacional";

function AdminAppContent() {
  const { adminView } = useAdmin();

  const renderView = () => {
    switch (adminView) {
      case "overview":    return <AdminOverviewView />;
      case "preguntas":   return <AdminPreguntasView />;
      case "profesiones": return <AdminProfesionesView />;
      case "usuarios":    return <AdminUsuariosView />;
      default:            return <AdminOverviewView />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: COLORS.bg,
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        width: "100%",
      }}
    >
      <AdminSidebar />
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <AdminTopBar />
        <div style={{ flex: 1, position: "relative" }}>
          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default function AdminPage() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();
  const router = useRouter();

  // Show loading while verifying auth
  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f8f9fc",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: 40,
            height: 40,
            border: "3px solid #e5e7eb",
            borderTopColor: "#7C5CFC",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            margin: "0 auto 16px",
          }} />
          <p style={{ color: "#6b7280", fontSize: 14 }}>Cargando...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  // Not authenticated → login
  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  // Not admin → student view
  if (!isAdmin) {
    router.push('/');
    return null;
  }

  return (
    <AdminProvider>
      <AdminAppContent />
    </AdminProvider>
  );
}

