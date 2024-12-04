<?php

namespace App\Controller;

use App\Entity\Produit;
use App\Repository\ProduitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProduitController extends AbstractController
{
    /**
     * @Route("/api/produits", methods={"GET"})
     */
    public function getProduits(ProduitRepository $produitRepository): Response
    {
        $produits = $produitRepository->findAll();
        return $this->json($produits);
    }

    /**
     * @Route("/api/produits", methods={"POST"})
     */
    public function addProduit(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        
        $produit = new Produit();
        $produit->setNom($data['nom']);
        $produit->setPrix($data['prix']);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($produit);
        $entityManager->flush();

        return $this->json($produit, Response::HTTP_CREATED);
    }
}
