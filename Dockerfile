# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json* ./
RUN npm install

# Copiar el resto de la app
COPY . .

# Construir la app
RUN npm run build

# Stage 2: Run in production
FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /app

# Copiar solo lo necesario desde el builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
#COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 3000

CMD ["npm", "start"]
