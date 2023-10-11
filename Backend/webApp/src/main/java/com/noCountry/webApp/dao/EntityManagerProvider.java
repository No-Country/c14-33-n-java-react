package appNombreBackend.dao;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class EntityManagerProvider {

	private EntityManagerFactory entityManagerFactory;
	private EntityManager entityManager;
	private static EntityManagerProvider provider;

	private EntityManagerProvider() {
		initEntityManager();
	}

	private void initEntityManager() {
		entityManagerFactory = Persistence.createEntityManagerFactory("nocountryDB");
		entityManager = entityManagerFactory.createEntityManager();
	}

	public static synchronized EntityManagerProvider getProvider() {
		if (provider == null) {
			provider = new EntityManagerProvider();
		}
		return provider;
	}

	public EntityManager getEntityManager() {
		return entityManager;
	}

	public void closeResources() {
		if (entityManager != null && entityManager.isOpen()) {
			entityManager.close();
		}

		if (entityManagerFactory != null && entityManagerFactory.isOpen()) {
			entityManagerFactory.close();
		}
	}

}
