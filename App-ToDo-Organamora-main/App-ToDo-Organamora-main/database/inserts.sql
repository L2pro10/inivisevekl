USE dbDados;

INSERT INTO tbl_devs (nome, funcao, foto, frase) VALUES
('Thiago Mantovani', 'Engenheiro de IA & Backend (AetherOS)', 'https://i.pravatar.cc/150?u=thiago', 'Modelos adaptativos só são eficientes se o backend responder em milissegundos.'),
('Beatriz Luz da Silva', 'Frontend Tech Lead & UI Design', 'https://i.pravatar.cc/150?u=beatriz', 'Tornar o invisível intuitivo exige interfaces limpas, acessíveis e rápidas.'),
('Lucas Ferreira', 'Cientista de Dados (Prisma Core)', 'https://i.pravatar.cc/150?u=lucas', 'A verdadeira privacidade do usuário começa no processamento local dos dados.'),
('André Souza', 'Especialista em Cloud & Edge Infrastructure', 'https://i.pravatar.cc/150?u=andre', 'Sistemas autônomos exigem pipelines de deploy imperfecíveis.'),
('Dioni Mercedes', 'DBA & Especialista em Vetores', 'https://img.freepik.com/premium-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_1120246-4742.jpg', 'Otimizar busca vetorial é garantir que a inteligência da empresa responda em tempo real.');

INSERT INTO tbl_tasks (nomeTasks, tempo, relevancia, status) VALUES
('Otimizar inferência local do Prisma Core', '30 min', 'muito importante', 'finalizada'),
('Refatorar CSS do painel Glassmorphism', '15 min', 'pouco importante', 'finalizada'),
('Treinar modelo de previsão do AetherOS', '120 min', 'muito importante', 'atrasada'),
('Audit de segurança nos nós de processamento', '60 min', 'importante', 'em progresso'),
('Atualizar chaves de criptografia do banco', '20 min', 'muito importante', 'finalizada'),
('Revisar PR da interface do usuário', '90 min', 'importante', 'atrasada'),
('Limpar registros de logs temporários', '45 min', 'pouco importante', 'em progresso'),
('Calibrar sensores de interface neural', '120 min', 'importante', 'em progresso'),
('Passear com o robô de testes', '30 min', 'pouco importante', 'finalizada'),
('Documentar API do AetherOS v2', '40 min', 'importante', 'atrasada'),
('Sincronização de nós locais', '10 min', 'pouco importante', 'finalizada'),
('Atualizar roadmap de produtos', '60 min', 'muito importante', 'em progresso'),
('Ajustar taxa de amostragem de dados', '45 min', 'importante', 'atrasada'),
('Verificar integridade do cluster', '5 min', 'pouco importante', 'finalizada'),
('Responder feedbacks do canal interno de IA', '10 min', 'pouco importante', 'finalizada'),
('Backup do banco vetorial', '30 min', 'muito importante', 'atrasada'),
('Substituir servidores de borda', '15 min', 'pouco importante', 'em progresso'),
('Planejar demonstração do Prisma Core', '90 min', 'importante', 'atrasada'),
('Reunião de alinhamento com a equipe de IA', '120 min', 'muito importante', 'finalizada'),
('Apresentação para investidores', '150 min', 'pouco importante', 'finalizada');

INSERT INTO tbl_users (nome, usuario, senha) VALUES
('Carlos Silva', 'carlos.silva_aetheria', 'pbkdf2_sha256$12345$a3th3r1a'),
('Ana Oliveira', 'ana_aetheros_lead', 'aetheria!AetherOS2028'),
('Bruno Ferreira Vasconcelos', 'bruno.prisma_dev', 'prismaCore#2028'),
('Mariana Souza', 'mariana.sec_aetheria', 'M4riana_SecurityAether'),
('Flávia Santos', 'flavia_admin_tech', 'Aetheria5678@admin');

INSERT INTO tbl_usersTasks (id_tasks, id_users, horario) VALUES
(2, 1, '22:00'), (4, 1, '18:00'), (5, 1, '20:00'), (18, 1, '10:00'),
(1, 2, '20:30'), (6, 2, '18:30'), (9, 2, '21:00'), (12, 2, '05:00'),
(19, 3, '15:00'), (16, 3, '16:00'), (14, 3, '18:00'), (20, 3, '19:00'),
(3, 4, '15:00'), (7, 4, '20:00'), (11, 4, '22:00'), (13, 4, '14:00'),
(10, 5, '16:00'), (15, 5, '05:30'), (17, 5, '16:30');
