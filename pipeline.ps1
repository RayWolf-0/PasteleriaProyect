# pipeline.ps1 - Simulador de CI/CD
Write-Host "INICIANDO PIPELINE DE DESPLIEGUE AUTOMATIZADO..." -ForegroundColor Cyan
Write-Host "---------------------------------------------------"

# ETAPA 1: Auditoría de Calidad/Seguridad (Tu script de Python)
Write-Host "1️EJECUTANDO AUDITORÍA DE CUMPLIMIENTO (IE5)..." -ForegroundColor Yellow
python auditoria.py > resultado_auditoria.txt
$resultado = Get-Content resultado_auditoria.txt

# Mostrar el resultado en pantalla
$resultado

# Verificar si la auditoría falló
if ($resultado -match "RECHAZADO") {
    Write-Host " ALERTA CRÍTICA: La auditoría de seguridad falló." -ForegroundColor Red
    Write-Host " EL PIPELINE SE HA DETENIDO. NO SE REALIZARÁ EL DESPLIEGUE." -ForegroundColor Red
    Write-Host "ESTADO FINAL: FALLIDO (Broken Pipeline)" -ForegroundColor Red
    exit 1
}

# ETAPA 2: Despliegue (Solo ocurre si la etapa 1 pasa)
Write-Host "Auditoría aprobada. Continuando..." -ForegroundColor Green
Write-Host "2️DESPLEGANDO EN KUBERNETES..." -ForegroundColor Yellow

kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/service-a.yaml
kubectl apply -f k8s/service-b.yaml

Write-Host "🎉 DESPLIEGUE EXITOSO." -ForegroundColor Green